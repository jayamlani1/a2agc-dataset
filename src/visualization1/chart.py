import argparse
import csv
import io
import typing as t

import altair as alt # type: ignore

# Types

T = t.TypeVar('T')
_Options = t.Mapping[str, t.Any]

# Utilities

def _get_filled(color: str) -> _Options:
  return { 'fill': alt.FillValue(color) }

def _get_transparently_filled() -> _Options:
  return { 'fillOpacity': alt.FillOpacityValue(0) }

def _get_stroked(color: str, width: float) -> _Options:
  return {
    'stroke': alt.StrokeValue(color),
    'strokeWidth': alt.StrokeWidthValue(width)
  }

# Chart generation

def _get_base(
  data: t.Any, start_year: int , end_year: int,
  width: int, height: int
) -> alt.Chart:
  base = alt.Chart(data)
  if start_year >= 0:
    base = base.transform_filter(alt.datum.year >= start_year)
  if end_year >= 0:
    base = base.transform_filter(alt.datum.year <= end_year)

  return base.transform_aggregate(
    count='sum(count)',
    groupby=['gender', 'age_group']
  ).transform_joinaggregate(
    total='sum(count)',
    groupby=['gender']
  ).transform_calculate(
    percentage='datum.count / datum.total'
  ).properties(
    width=(width - 30) // 2,
    height=height
  )

def _create_stacked_chart(
  filled_base: alt.Chart, stroked_base: alt.Chart, gender: str,
  fill: str, stroke: str, stroke_width: float,
  domain: float = None,
  show_xlabels: bool = True, show_title: bool = True
) -> alt.Chart:
  x = alt.X(
    'percentage:Q', title=None,
    sort='ascending' if gender == 'F' else 'descending',
    scale=alt.Scale(domain=[0, domain]) if domain is not None else alt.Undefined,
    axis=alt.Axis(format='.0%', labels=show_xlabels, labelFlush=False, grid=False)
  )
  y = alt.Y(
    'age_group:O', title=None, axis=None
  )

  filled = filled_base.transform_filter(
    alt.datum.gender == gender
  ).encode(
    x=x, y=y, **_get_filled(fill)
  ).mark_bar()

  stroked = stroked_base.transform_filter(
    alt.datum.gender == gender
  ).encode(
    x=x, y=y, **_get_transparently_filled(),
    **_get_stroked(stroke, stroke_width)
  ).mark_bar()

  if show_title:
    title = 'Female' if gender == 'F' else 'Male'
  else:
    title = ''

  return alt.layer(
    filled, stroked
  ).resolve_scale(
    x='shared', y='shared'
  ).properties(
    title=title
  )

def _create_labels(base: alt.Chart) -> alt.Chart:
  return base.transform_calculate(
    age_low='5 * (17 - datum.age_group)'
  ).transform_calculate(
    label='if(datum.age_low == 85, "85+", toString(datum.age_low) + "-" + toString(datum.age_low + 4))'
  ).encode(
    y=alt.Y('age_group:O', axis=None),
    text=alt.Text('label:O')
  ).mark_text().properties(width=30)

def create(
  *, source1: t.Any, source2: t.Any, title: str,
  start_year1: int, end_year1: int,
  start_year2: int, end_year2: int,
  fill1: str, stroke1: str, stroke_width1: float,
  fill2: str, stroke2: str, stroke_width2: float,
  width: int, height: int, domain: float = None,
  show_xlabels: bool = True, show_ylabels: bool = True,
  show_subtitles: bool = True
) -> alt.Chart:
  base1 = _get_base(source1, start_year1, end_year1, width, height)
  base2 = _get_base(source2, start_year2, end_year2, width, height)
  left = _create_stacked_chart(
    base1, base2, 'M',
    fill1, stroke1, stroke_width1,
    domain, show_xlabels, show_subtitles
  )
  right = _create_stacked_chart(
    base1, base2, 'F',
    fill2, stroke2, stroke_width2,
    domain, show_xlabels, show_subtitles
  )
  labels = _create_labels(base2)

  return alt.hconcat(
    *((labels,) if show_ylabels else ()), left, right,
    spacing=0, bounds='flush',
    title=alt.TitleParams(
      text=title, anchor='middle',
      dx=15 if show_ylabels else 0
    )
  ).resolve_scale(
    y='shared'
  )

# Script functionality

def setup_cmd_parser(parser: argparse.ArgumentParser = None) -> argparse.ArgumentParser:
  if parser is None:
    parser = argparse.ArgumentParser(description='Create visualization 1 charts')
  parser.add_argument('source1', help='data source 1')
  parser.add_argument('source2', help='data source 2')
  parser.add_argument('args', type=argparse.FileType('rb'), help='visualization customization arguments')
  parser.add_argument('--width', type=int, default=530, help='max width per visualization')
  parser.add_argument('--height', type=int, default=400, help='max height per visualization')
  parser.add_argument('--domain', type=float, help='max value for the domain')
  parser.add_argument('--output', '-o', type=argparse.FileType('w'), default='-', help='output file for the vega-lite spec')

  return parser

def _get_arg_value(
  args: t.Sequence[t.Mapping[str, t.Optional[str]]], name: str, index: int,
  default: T = None, cast: t.Callable[[str], T] = None
) -> t.Union[str, T, None]:
  while index >= 0:
    arg = args[index].get(name)
    if arg:
      return cast(arg) if cast else arg
    index -= 1
  return default

def _get_create_args(args: t.Sequence[t.Mapping[str, t.Optional[str]]], index: int) -> t.Dict[str, t.Any]:
  arg_spec: t.Iterable[t.Tuple[str, t.Any, t.Any]] = [
    ('title', '', None),
    ('start_year1', -1, int),
    ('end_year1', -1, int),
    ('start_year2', -1, int),
    ('end_year2', -1, int),
    ('fill1', 'gray', None),
    ('stroke1', 'black', None),
    ('stroke_width1', 2, float),
    ('fill2', 'gray', None),
    ('stroke2', 'black', None),
    ('stroke_width2', 2, float)
  ]

  return { name: _get_arg_value(args, name, index, default, cast) for name, default, cast in arg_spec }

if __name__ == '__main__':
  NCOLUMNS = 3

  ns = setup_cmd_parser().parse_args()
  data_format = alt.CsvDataFormat(parse={ 'year': 'number', 'age_group': 'number', 'count': 'number' })
  sources = { 'source1': alt.UrlData(ns.source1, data_format), 'source2': alt.UrlData(ns.source2, data_format) }

  with ns.args as rawfile, io.TextIOWrapper(rawfile, newline='') as argsfile:
    reader = csv.DictReader(argsfile)
    args = [row for row in reader]

  charts: t.List[alt.Chart] = []
  for index in range(len(args)):
    show_xlabels = len(args) - index <= NCOLUMNS
    show_ylabels = index % NCOLUMNS == 0
    show_subtitles = index < NCOLUMNS

    charts.append(create( # type: ignore[call-arg]
      width=ns.width, height=ns.height,
      domain=ns.domain,
      show_xlabels=show_xlabels,
      show_ylabels=show_ylabels,
      show_subtitles=show_subtitles,
      **sources, **_get_create_args(args, index)
    ))

  if len(charts) > 1:
    chart = alt.concat(
      *charts, columns=NCOLUMNS, spacing=5
    ).configure_view(
      stroke='transparent'
    )
  else:
    chart = charts[0].configure_view(stroke='transparent')

  with ns.output as outfile:
    outfile.write(chart.to_json())
