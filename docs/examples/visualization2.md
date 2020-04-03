This example visualization shows opioid deaths trajectories based on prescription, overdose, justice involvement and health data.

# Data and Graphic Variable Extraction

The table was created using the following SQL script:

{{ include_sql('src/visualization2/data.sql') }}

The resulting aggregated data can be found [here](../data/visualization2/data.csv).

Following rules were used to determined each of the following attributes:

1. Prescription VS No prescription: True if any one of the flags OPIOD_FLAG and BENZO_FLAG was set for the particular CASE_NUMBER. This information is taken form `medications` table.
2. Overdose VS No overdose: True if OVERDOSE_CC_MOI was set in `ems_incidents` table for the particular CASE_NUMBER, false otherwise.
3. Justice Involvement VS No Involvement: If the particular CASE_NUMBER is present in `incarcerations` table then True, false otherwise.
4. Health Data VS No health data: True if CASE_NUMBER is present in `encounters` table, false otherwise.


# Visualization

The final visualization is shown below.

{{ vega.header() }}
{{ vega.include('./visualization2.vl.json') }}
