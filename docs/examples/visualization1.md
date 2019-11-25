This example visualization shows a bar graph of opioid deaths by gender and age group compared to the census data of Marion County, Indiana.

# Data and Graphic Variable Extraction

Opioid death data was fetch from the database using the following query:

{{ include_sql('src/visualization1/extract_data.sql') }}

# Visualization creation

A VegaLite [specification](../data/vis1-data/full-vis.json) was created using [this script](https://github.com/cns-iu/a2agc-dataset/blob/develop/src/visualization1/chart.py). The specification is then rendered using vega embed.

# Visualization

The final product is visualized below.

{{ vega_script_tags }}
{{ include_vega_ext('../data/vis1-data/full-vis.json') }}
