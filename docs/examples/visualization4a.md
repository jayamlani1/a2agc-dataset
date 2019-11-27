This example visualization shows heatmap of opioid deaths categorized by sex, age group, substance and date

# Data and Graphic Variable Extraction

Opiod death data was fetch from the database using the following query

Here `substance` is name of the substance for which we need details. Example: `Cocaine`
```sql
SELECT
    CASE_NUMBER,
    SEX,
    '{substance}' AS SUBSTANCE_NAME,
    CAST((AGE / {age_group_range}) AS INT) AS AGE_GROUP,
    DOD as DATE_OF_DEATH,
    YEAR
FROM deaths
WHERE {"ANY_" + substance} == 1
```

The extracted data can be found [here](../data/visualization4a/visualization4a.csv)

# Data transformations

For each substance the data was transformed using `pandas` dataframes as following

```py

df_by_substance_name = df.query(f'substance_name == "{substance_name}"') if substance_name != 'ALL_SUBSTANCES' else df
# Sharing the y axis with other columns in visualization
heat_maps = alt.hconcat().resolve_scale(y='shared')

heat_maps |=  _get_heatmap(df_by_substance_name, substance_name)

male_data = df_by_substance_name.query('sex == "M"')
heat_maps |=  _get_heatmap(male_data, substance_name, "Male")

female_data = df_by_substance_name.query('sex == "F"')
heat_maps |= _get_heatmap(female_data, substance_name, "Female")
```

Individual heatmaps were created using the following script and then stacked
 1. Horizontally based on ALL_GENDERS, Male, Female
 2. Vertically based on the `substance_name`

```py
     chart = alt.Chart(
        data_frame,
        # Heatmap title format eg: COCAINE
        title=f"{sex}" if sex else f"{substance}",
        ).transform_aggregate(
            total_deaths='count():Q',
            groupby=["age_group", "year"]
        ).transform_calculate(
            # Transforming the group number to group range. eg: if group number is 2 it's group range should be (5-9)
            group=f'toString(5 * datum.age_group) + "-" + toString({age_group_range} * datum.age_group + {age_group_range - 1})'
        ).mark_rect().encode(
            alt.X('year:O', title=''),
            # Only displaying title and labels for the first column
            alt.Y('group:O', title='Age Group' if _is_first_column(sex) else '', axis=alt.Axis(labels=_is_first_column(sex))),
            color=alt.Color('total_deaths:Q', title='Deaths', scale=alt.Scale(scheme="yellowgreenblue")),
            tooltip= [
                alt.Tooltip('total_deaths:O', title='Deaths'),
                alt.Tooltip('group:O', title='Age Group'),
                alt.Tooltip('year:O', title='Year')
            ],
        ).properties(
            width= column_width,
            height = column_height
        )
```

# Visualization

The final visualization is shown below.

{{vega_script_tags}}
{{include_vega_ext('../data/visualization4a/output.json')}}

