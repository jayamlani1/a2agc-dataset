# Opioid Death Trajectories
---------------------------

This example visualization shows opioid overdose deaths based on history of opioid prescription, previous overdoses, incarceration and encounters with health services.

## Visualization

The final visualization is shown below.  

{{ vega.header() }}
{{ vega.include('./visualization2b.vl.json') }}

## Purpose and Criteria

The purpose of this visualization is to provide insight on the frequency of events that commonly occur before an overdose death.

Four criteria are analyzed:

1. Opioid Prescription (Rx): Whether or not an individual had received an opioid prescription. This includes any opioid or benzo medications that were provided to the individual.
2. Overdose (OD): Whether or not an individual had a previous overdose requiring EMS intervention. 
3. Incarceration (Jail): Whether or not an individual had been in jail.
4. Health Data (Health): Whether or not an individual had a previous encounter with healthcare services (excluding opioid prescriptions).

The visualization provides a comparison of the number of cases across each possible combination of the above criteria, including the case where none apply (∅).

## Data and Graphic Variable Extraction

The table was created using the following SQL script:

{{ include_sql('src/visualization2/data.sql') }}

The resulting aggregated data can be found [here](../data/visualization2/data.csv).

Following rules were used to determined each of the following attributes:

1. Prescription VS No prescription: True if any one of the flags OPIOD_FLAG and BENZO_FLAG was set for the particular CASE_NUMBER. This information is taken from `medications` table.
2. Overdose VS No overdose: True if OVERDOSE_CC_MOI was set in `ems_incidents` table for the particular CASE_NUMBER, false otherwise.
3. Justice Involvement VS No Involvement: If the particular CASE_NUMBER is present in `incarcerations` table then True, false otherwise.
4. Health Data VS No health data: True if CASE_NUMBER is present in `encounters` table, false otherwise.