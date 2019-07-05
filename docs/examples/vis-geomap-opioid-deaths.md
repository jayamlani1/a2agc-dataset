This example visualization shows a geographic map of opioid deaths that occurred from 2010-2018 in Marion County, Indiana.

# Data and Graphic Variable Extraction


Opioid death data was fetched from the database using the following query:

```sql
SELECT DISTINCT
    d.CASE_NUMBER,
    d.LAST_NAME,
    d.FIRST_NAME,
    d.SEX,
    CASE WHEN d.SEX = 'M' THEN 'blue'
        WHEN d.SEX = 'F' THEN 'pink'
        ELSE 'black' END AS 'SEX$$color',
    d.HOME_ZIP,
    d.HOME_STATE,
    CASE WHEN d.HOME_STATE = 'IN' THEN '#bebebe'
        ELSE 'black' END AS 'HOME_STATE$$color',
    CASE WHEN d.HOME_STATE = 'IN' THEN 'circle'
        ELSE 'triangle' END AS 'HOME_STATE$$shape',
    d.INJURY_ZIP,
    r.N_OPIOID_PRESCRIPTIONS,
    (CAST(r.N_OPIOID_PRESCRIPTIONS AS real) / (SELECT max(N_OPIOID_PRESCRIPTIONS) FROM rollup1) * 50) + 50 AS 'N_OPIOID_PRESCRIPTIONS$$areaSize',
    l.LATITUDE,
    l.LONGITUDE,
    'Fixed values for visualization' AS 'Fixed',
    '#bebebe' AS 'Fixed$$color',
    1 AS 'Fixed$$strokeWidth',
    0.4 AS 'Fixed$$strokeTransparency'
FROM deaths as d
    INNER JOIN rollup1 as r ON d.CASE_NUMBER = r.CASE_NUMBER
    INNER JOIN locations as l ON d.INJURY_ADDRESS = l.ADDRESS and d.INJURY_CITY = l.CITY and d.INJURY_ZIP = l.ZIP
ORDER BY d.CASE_NUMBER ASC;
```
([Source SQL File](https://github.com/cns-iu/a2agc-dataset/blob/develop/src/create-vis-geomap-opioid-deaths-data.sql))

In addition to extracting raw data, the query also creates columns for data-variable to graphic-variable mappings as follows:

* Color mapping was created from the `SEX` column, if `SEX` was `male`, a value of `blue` was assigned and for `female`, a value of `pink` was assigned.   
* Stroke Color mapping was created from the `HOME_STATE` column, if `HOME_STATE` was `IN`, a value of `#bebebe` was assigned, else `black` was assigned.
* Shape mapping was created from `HOME_STATE`, if `HOME_STATE` was `IN`, a value of `circle` as assigned, else `triangle` was assigned.
* Size mapping was created from `N_OPIOID_PRESCRIPTIONS` and results interpolated in the range of `100 - 600`.

The results were exported to a [csv file](../data/vis-geomap-opioid-deaths.csv) for loading into Make-a-Vis.

# Visualization Creation

A MaV [project.yml](../data/vis-geomap-opioid-deaths.yml) file was created from the [csv file](../data/vis-geomap-opioid-deaths.csv) using [this script](https://github.com/cns-iu/a2agc-dataset/blob/develop/src/create-vis-geomap-opioid-deaths-project.ts). The script creates a `Project` from the imported CSV file and sets up a geomap visualization (see below). This process was automated, but it can also be generated manually with [Make-a-Vis](https://cns-iu.github.io/make-a-vis/) by loading the generated [csv file](../data/vis-geomap-opioid-deaths.csv) and creating a visualization via the GUI.

# Visualization

The final product is visualized below. You can download the [project.yml](../data/vis-geomap-opioid-deaths.yml) and load it into [Make-a-Vis](https://cns-iu.github.io/make-a-vis/) to explore the visualization and potentially derive new ones from there.

<!-- Add mav-embed javascript bundle -->
<script src="https://cdn.jsdelivr.net/npm/@dvl-fw/mav-embed@0.3.2/main-es5.js" nomodule></script> 
<script src="https://cdn.jsdelivr.net/npm/@dvl-fw/mav-embed@0.3.2/main-es2015.js" type="module"></script> 

<!-- Add a project -->
<mav-project id="proj1" href="../data/vis-geomap-opioid-deaths.yml"></mav-project>

<!-- Add a visualization referencing the project -->
<div style="height: 500px; margin: 20px;">
  <mav-visualization project="#proj1" index="0"></mav-visualization>
</div>
<div style="overflow-x: scroll">
  <mav-legend project="#proj1" orientation="horizontal" advanced="true"></mav-legend>
</div>
([Source Project YML File](../data/vis-geomap-opioid-deaths.yml))
