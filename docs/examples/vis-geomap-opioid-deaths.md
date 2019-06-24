<!-- Add mav-embed javascript bundle -->
<script src="https://cdn.jsdelivr.net/npm/@dvl-fw/mav-embed@0.3.1/main-es5.js" nomodule></script> 
<script src="https://cdn.jsdelivr.net/npm/@dvl-fw/mav-embed@0.3.1/main-es2015.js" type="module"></script> 
 
<!-- Add a project -->
<mav-project id="proj1" href="/data/vis-geomap-opioid-deaths.yml">
</mav-project>
 
 <div style="height: 500px;">
  <!-- Add a visualization referencing the project -->
  <mav-visualization project="#proj1" index="0"></mav-visualization>
</div>