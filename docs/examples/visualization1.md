This example visualization shows a bar graph of opioid deaths by gender and age group compared to the census data of Marion County, Indiana.

# Data and Graphic Variable Extraction

Opioid death data was fetch from the database using the following query:

{{ include_sql('src/visualization1/extract_data.sql') }}

The aggregated data can be found [here](../data/vis1-data/death-counts.csv) and the census data can be found [here](../data/vis1-data/census-counts.csv). The original census data was retrieved from [here]().

# Visualization creation

Two VegaLite specifications - [overall](../data/vis1-data/all-years-vis.json) and [by year](../data/vis1-data/by-year-vis.json) - were created using [this script](https://github.com/cns-iu/a2agc-dataset/blob/develop/src/visualization1/chart.py). The specifications are then rendered using vega embed.

# Visualization

The final product is visualized below. The gray bars represent the opioid deaths and the stroked bars represent the census data.

{{ vega_script_tags }}
{{ include_vega_ext('../data/vis1-data/all-years-vis.json') }}  
{{ include_vega_ext('../data/vis1-data/by-year-vis.json') }}

[^*]: For the 2018 visualization, we currently do not have 2018 census data. We use 2017 census data instead.
