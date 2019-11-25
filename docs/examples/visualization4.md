This example visualization shows heatmap of opioid deaths categorized by sex, age group, substance and date

# Data and Graphic Variable Extraction

Opiod death data was fetch from the database using the following query

Here `substance` is name of the substance for which we need details. Example: `Cocaine`
```sql
SELECT
	CASE_NUMBER,
    SEX,
    "{"." + substance}" AS SUBSTANCE_NAME,
    {substance + "_AMOUNT"} AS SUBSTANCE_AMOUNT,
    CAST((AGE / {age_group_range}) AS INT) AS AGE_GROUP,
    DOD as DATE_OF_DEATH,
    YEAR
FROM deaths \
WHERE {substance + "_AMOUNT"} !=0'
```

The extracted data can be found [here](../data/visualization4/visualization4.csv)

# Data transformations

For each substance the data was transformed using `pandas` dataframes as following

```py
df['year_month_of_death'] = df['date_of_death'].apply(lambda x: _get_year_month(x)).astype('datetime64')

df['substance_name'] = df['substance_name'].apply(lambda x: x[1:])

df_by_substance_name = df.query(f'substance_name == "{substance_name}"') if substance_name != 'ALL_SUBSTANCES' else df
heat_maps = alt.hconcat().resolve_scale(y='shared')

groups = df_by_substance_name.groupby(['age_group', 'year_month_of_death'])
all_data = groups['substance_amount'].mean().reset_index(name=color_coding_label)

groups = df_by_substance_name.query('sex == "M"').groupby(['age_group', 'year_month_of_death'])
male_data = groups['substance_amount'].mean().reset_index(name=color_coding_label)

groups = df_by_substance_name.query('sex == "F"').groupby(['age_group', 'year_month_of_death'])
female_data = groups['substance_amount'].mean().reset_index(name=color_coding_label)
```

Individual heatmaps were created using the following script and then stacked
 1. Horizontally based on ALL_GENDERS, Male, Female
 2. Vertically based on the `substance_name`

```py
alt.Chart(
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
```

# Visuzalization

The final visualization is shown below.

{{vega_script_tags}}
{{include_vega_ext('../data/visualization4/output.json')}}

