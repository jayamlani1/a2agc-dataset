## Steps
-----------------

The following steps were taken to visualize the opioid deaths data - 

1. Opioid deaths data was fetched from the database using this [sql](https://github.com/cns-iu/a2agc-dataset/blob/develop/src/create-vis-geomap-opioid-deaths-data.sql) file. The results were exported to a [csv](../data/vis-geomap-opioid-deaths.csv).
 The query also makes column entries for data-variable to graphic-variable mappings as follows -  
    - Color mapping was created from the `SEX` column, if `SEX` was `male`, a value of `blue` was assigned and for `female`, a value of `pink` was assigned.   
    - Stroke Color mapping was created from the `HOME_STATE` column, if `HOME_STATE` was `IN`, a value of `brown` was assigned, else `black` was assigned.  
    - Size mapping was created from `N_OPIOID_PRESCRIPTIONS` and results interpolated in the range of `100 - 600`.

2. A [yml](../data/vis-geomap-opioid-deaths.yml) project file was created from the [csv](../data/vis-geomap-opioid-deaths.csv) using [this script](https://github.com/cns-iu/a2agc-dataset/blob/develop/src/create-vis-geomap-opioid-deaths-project.ts). The script creates a `Project` from the imported CSV and -   

    - adds a `GraphicSymbol`in the `Project` object with all the graphic-variable mappings.  
    - adds a `ScatterplotVisualization` (**Geomap coming soon**) object as an attribute of the `Project`, with all the options needed to be enabled for the visualization.  
    - adds a `RawData` object with its `url` set to the path of the `csv` to the `rawData` attribute of the `Project` object.  
    - The `Project` so created is then exported to a `yml` file, which can then be used to make a visualization in the `make-a-vis` tool.  

3. Steps 1 and 2, automate the process of creation of the visualization of opioid deaths using scripts.  
Step 2 can be skipped, if the user has access to the GUI tool directly after Step 1 - [Make-a-Vis](https://cns-iu.github.io/make-a-vis/) to load the [csv](../data/vis-geomap-opioid-deaths.csv) file. The application will perform Step 2 internally and render the visualization. The `yml` of the `Project` object so created, can be downloaded by clicking on `Save Project` from the application menu. This `yml` can be used to load the visualization again. It serves to save out the user's workspace.

The rendered visualization looks like as follows - 

<!-- Add mav-embed javascript bundle -->
<script src="https://cdn.jsdelivr.net/npm/@dvl-fw/mav-embed@0.3.1/main-es5.js" nomodule></script> 
<script src="https://cdn.jsdelivr.net/npm/@dvl-fw/mav-embed@0.3.1/main-es2015.js" type="module"></script> 
 
<!-- Add a project -->
<mav-project id="proj1" href="../data/vis-geomap-opioid-deaths.yml">
</mav-project>
 
 <div style="height: 500px;">
  <!-- Add a visualization referencing the project -->
  <mav-visualization project="#proj1" index="0"></mav-visualization>
</div>