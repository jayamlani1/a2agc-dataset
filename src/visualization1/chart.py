import argparse
import typing as t

import altair as alt # type: ignore

# Types

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

def _get_base(data: t.Any, start_year: int , end_year: int) -> alt.Chart:
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
    width=250
  )

def _create_stacked_chart(
  filled_base: alt.Chart, stroked_base: alt.Chart,
  gender: str, fill: str, stroke: str,
  stroke_width: float
) -> alt.Chart:
  x = alt.X(
    'percentage:Q', title=None,
    sort='ascending' if gender == 'F' else 'descending',
    axis=alt.Axis(format='.1%', labelFlush=False, grid=False)
  )
  y = alt.Y(
    'age_group:O', title=None, sort='descending',
    axis=None
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

  return alt.layer(
    filled, stroked
  ).resolve_scale(
    x='shared', y='shared'
  ).properties(
    title='Female' if gender == 'F' else 'Male'
  )

def _create_labels(base: alt.Chart) -> alt.Chart:
  return base.transform_calculate(
    label='toString(5 * datum.age_group) + "-" + toString(5 * datum.age_group + 4)'
  ).encode(
    y=alt.Y('age_group:O', sort='descending', axis=None),
    text=alt.Text('label:O')
  ).mark_text().properties(width=20)

def create(
  source1: t.Any, source2: t.Any,
  start_year: int, end_year: int,
  fill1: str, stroke1: str, stroke_width1: float,
  fill2: str, stroke2: str, stroke_width2: float
) -> alt.Chart:
  base1 = _get_base(source1, start_year, end_year)
  base2 = _get_base(source2, start_year, end_year)
  left = _create_stacked_chart(base1, base2, 'M', fill1, stroke1, stroke_width1)
  right = _create_stacked_chart(base1, base2, 'F', fill2, stroke2, stroke_width2)
  labels = _create_labels(base2)

  return alt.hconcat(
    labels, left, right, spacing=0, bounds='flush'
  ).resolve_scale(
    y='shared'
  ).configure_view(
    stroke='transparent'
  )

# Script functionality

def setup_cmd_parser(parser: argparse.ArgumentParser = None) -> argparse.ArgumentParser:
  if parser is None:
    parser = argparse.ArgumentParser(description='Create visualization 1 charts')
  parser.add_argument('source1', help='data source 1')
  parser.add_argument('source2', help='data source 2')
  parser.add_argument('--start-year', type=int, default=-1, help='start year of visualized data (inclusive)')
  parser.add_argument('--end-year', type=int, default=-1, help='end year of visualized data (inclusive)')
  parser.add_argument('--fill', default='grey', help='fill color for both sides of the chart')
  parser.add_argument('--fill1', help='fill color for the left side of the chart (overrides --fill)')
  parser.add_argument('--fill2', help='fill color for the right side of the chart (overrides --fill)')
  parser.add_argument('--stroke', default='black', help='stroke color for both sides of the chart')
  parser.add_argument('--stroke1', help='stroke color for the left side of the chart (overrides --stroke)')
  parser.add_argument('--stroke2', help='stroke color for the right side of the chart (overrides --stroke)')
  parser.add_argument('--stroke-width', type=float, default=2, help='stroke width for both sides of the chart')
  parser.add_argument('--stroke-width1', type=float, help='stroke width for the left side of the chart (overrides --stroke-width)')
  parser.add_argument('--stroke-width2', type=float, help='stroke width for the right side of the chart (overrides --stroke-width)')
  parser.add_argument('--output', '-o', type=argparse.FileType('w'), default='-', help='output file for the vega-lite spec')

  return parser

if __name__ == '__main__':
  ns = setup_cmd_parser().parse_args()
  with ns.output as outfile:
    data_format = alt.CsvDataFormat(parse={ 'year': 'number', 'age_group': 'number', 'count': 'number' })
    fill1 = ns.fill1 or ns.fill
    stroke1 = ns.stroke1 or ns.stroke
    stroke_width1 = ns.stroke_width1 or ns.stroke_width
    fill2 = ns.fill2 or ns.fill
    stroke2 = ns.stroke2 or ns.stroke
    stroke_width2 = ns.stroke_width2 or ns.stroke_width
    spec = create(
      alt.UrlData(ns.source1, data_format),
      alt.UrlData(ns.source2, data_format),
      ns.start_year, ns.end_year,
      fill1, stroke1, stroke_width1,
      fill2, stroke2, stroke_width2
    )

    outfile.write(spec.to_json())
