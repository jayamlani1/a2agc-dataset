import altair as alt
import argparse
import numpy as np
import pandas as pd
import sqlite3
import typing as t

substances = [
    'ALL_SUBSTANCES',
    'FENTANYL',
    'COCAINE',
    'MORPHINE',
    'CODEINE',
    'NORFENTANYL',
    'FENTANYL_ACETYL',
    'FENTANYL_4ANPP',
    'FURANYL_FENANTYL',
    'FIBF_FENTANYL',
    'CARFENTANYL',
    'OXYCODONE',
    'HYDROCODONE',
    'OXYMORPHONE',
    'HYDROMORPHONE',
    'DIHYDROCODEINE',
    'BENZOYLECGONINE',
    'METHADONE',
    'AMPHETAMINE',
    'METHAMPHETAMINE'
]

age_group_range = 5
color_coding_label = "Avg Amount"
column_width = 170
columns = ['case_number', 'sex', 'substance_name', 'substance_amount', 'age_group', 'date_of_death', 'year']


def _get_year_month(s):
    return s.split("-")[0]+"-"+s.split("-")[1] + "-" + "01"

def _get_heatmap(data_frame, substance = "", sex = "") -> alt.Chart:

    chart = alt.Chart(
        data_frame,
        title=f"{substance} - {sex}" if sex else f"{substance}",
        ).transform_calculate(
            group='toString(5 * datum.age_group) + "-" + toString(5 * datum.age_group + 4)'
        ).mark_rect().encode(
            alt.X('yearmonth(year_month_of_death):N', title=''),
            alt.Y('group:O', title='Age Group'),
            color=f'{color_coding_label}:Q',
            tooltip= [alt.Tooltip(f'{color_coding_label}:O', title='Amount'), alt.Tooltip('group:O', title='Group')],
        ).properties(
            width= column_width,
            height = 300
        )

    return chart

def _draw_heatmap_by_substance_name(df, substance_name: str) -> t.List[alt.Chart]:

    df_by_substance_name = df.query(f'substance_name == "{substance_name}"') if substance_name != 'ALL_SUBSTANCES' else df
    heat_maps = alt.hconcat().resolve_scale(y='shared')

    groups = df_by_substance_name.groupby(['age_group', 'year_month_of_death'])
    all_data = groups['substance_amount'].mean().reset_index(name=color_coding_label)
    heat_maps |=  _get_heatmap(all_data, substance_name)
  
    groups = df_by_substance_name.query('sex == "M"').groupby(['age_group', 'year_month_of_death'])
    male_data = groups['substance_amount'].mean().reset_index(name=color_coding_label)
    heat_maps |=  _get_heatmap(male_data, substance_name, "Male")

    groups = df_by_substance_name.query('sex == "F"').groupby(['age_group', 'year_month_of_death'])
    female_data = groups['substance_amount'].mean().reset_index(name=color_coding_label)
    heat_maps |= _get_heatmap(female_data, substance_name, "Female")
    
    return heat_maps


def _generate_heatmaps(data_frame, output) -> None:

    vis_rows = alt.vconcat().resolve_scale(color='independent')

    for substance in substances:
        vis_rows &= _draw_heatmap_by_substance_name(data_frame, substance)

    vis_rows.save("site/examples/temp-4.html")
    with open(f"{output}/site-data/visualization4/output.json", "w+") as f:
        f.write(vis_rows.to_json())

def _get_data(database: sqlite3.Connection, output):
    
    df = pd.DataFrame(columns = columns)

    for substance in substances[1:]:
        query = f'''SELECT
                    CASE_NUMBER,
                    SEX,
                    '{substance}' AS SUBSTANCE_NAME,
                    {substance + "_AMOUNT"} AS SUBSTANCE_AMOUNT,
                    CAST((AGE / {age_group_range}) AS INT) AS AGE_GROUP,
                    DOD as DATE_OF_DEATH,
                    YEAR
                FROM deaths
                WHERE {substance + "_AMOUNT"} !=0'''

        data = database.execute(query).fetchall()
        current_df = pd.DataFrame(data, columns= columns)
        df = df.append(current_df)

    df['year_month_of_death'] = df['date_of_death'].apply(lambda x: _get_year_month(x)).astype('datetime64')
    df.to_csv(f'{output}/site-data/visualization4/visualization4.csv')
    
    return df[['sex', 'substance_name', 'substance_amount','age_group','year_month_of_death']]

def _create_command_line_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description='Create visualization 4 heatmaps')
    parser.add_argument('database', type=sqlite3.connect, help='path to database file')
    parser.add_argument('output', help='output path')
    return parser

if __name__ == '__main__':
    parser = _create_command_line_parser()
    namespace = parser.parse_args()
    output = namespace.output
    df = _get_data(namespace.database, output)
    _generate_heatmaps(df, output)