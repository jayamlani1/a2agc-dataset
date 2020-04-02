# Demographic Comparison of Opioid Deaths
-----------------------------------------

This example visualization shows a bar graph of opioid deaths broken down by gender and age group compared to the census data of Marion County, Indiana.

## Data and Graphic Variable Extraction

Opioid death data was aggregated from the database using the following query:

{{ include_sql('src/visualization1/extract_data.sql') }}

The resulting aggregated data can be found [here](../data/vis1-data/death-counts.csv).

The original census data was retrieved from [here](https://factfinder.census.gov/bkmk/table/1.0/en/ACS/17_1YR/S0101/0500000US18097), and then processed using [this script](https://github.com/cns-iu/a2agc-dataset/blob/develop/src/visualization1/census_data.py) to produce a file with the same format as the aggregated opiod death data.  
The resulting file can be found [here](../data/vis1-data/census-counts.csv).


## Visualization creation

Two VegaLite specifications - [overall](../data/vis1-data/all-years-vis.json) and [by year](../data/vis1-data/by-year-vis.json) - were created using [this script](https://github.com/cns-iu/a2agc-dataset/blob/develop/src/visualization1/chart.py). The resulting specifications are then displayed using [Vega-Embed](https://github.com/vega/vega-embed).

## Visualization

The final product is visualized below.  
Each gray bar represents the percentage of opioid deaths in the corresponding age group.  
Each outlined bar represents the percentage of the population in the corresponding age group according to the census data.

{{ vega_script_tags }}
{{ include_vega_ext('../data/vis1-data/all-years-vis.json') }}  
{{ include_vega_ext('../data/vis1-data/by-year-vis.json') }}

[^1]: For the 2018 visualization, we currently do not have 2018 census data. We use 2017 census data instead.
