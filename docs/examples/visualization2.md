# Opioid Death Trajectories
---------------------------

This example visualization shows opioid overdose deaths based on case history of opioid prescription, previous overdose, incarceration and encounters with health services.

## Purpose and Details

The purpose of this visualization is to provide insight on the frequency of common events that commonly occur before an overdose death.

Four touchpoints are analyzed:

1. Opioid Prescription (Rx): Whether or not an individual had received an opioid prescription. This includes any opioid or benzo medications that were provided to the individual.
2. Overdose (OD): Whether or not an individual had a previous overdose requiring EMS intervention. 
3. Incarceration (Jail): Whether or not an individual had been in jail.
4. Health Data (Health): Whether or not an individual had a recent encounter with healthcare services (excluding opioid prescriptions).

The visualization provides a comparison of the number of cases across each possible combination of the above touchpoints, including the case where no touchpoints apply (∅).

Data was taken from four separate datasets corresponding to each of the four touchpoints. The timeframes for each dataset are as follows:

1. Medications: 2010-2018
2. EMS Incidents: 2011-2018
3. Incarcerations: 2014-2018
4. Health Encounters: 2010-2018

## Visualization

The final visualization is shown below.  

{{ vega.header() }}
{{ vega.include('./visualization2b.vl.json') }}

## Data and Graphic Variable Extraction

The table was created using the following SQL script:

{{ include_sql('src/visualization2/data.sql') }}

The resulting aggregated data can be found [here](../data/visualization2/data.csv).

Following rules were used to determined each of the following attributes:

1. Prescription VS No Prescription: True if any one of the flags OPIOD_FLAG or BENZO_FLAG was set in `medications` table for the particular CASE_NUMBER, False otherwise.
2. Overdose VS No Overdose: True if OVERDOSE_CC_MOI or NALOXONE_DUMMY was set in `ems_incidents` table for the particular CASE_NUMBER, False otherwise.
3. Justice Involvement VS No Involvement: If the particular CASE_NUMBER is present in `incarcerations` table then True, False otherwise.
4. Health Data VS No Health Data: True if CASE_NUMBER is present in `encounters` table, False otherwise.