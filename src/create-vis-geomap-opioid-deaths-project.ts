import { ProjectSerializer, DefaultGraphicSymbol, ScatterplotVisualization } from '@dvl-fw/core';
import { readFileSync, writeFileSync } from 'fs';
import { basename } from 'path';

async function read(inData: string) {
    try {
        const fileContents = readFileSync(inData, 'utf8');
        const fileName = basename(inData);
        const project = await ProjectSerializer.createProject('csv', fileContents, fileName);

        project.graphicSymbols.push(
            new DefaultGraphicSymbol({
                id: 'opioidDeaths',
                type: 'area',
                recordStream: 'csvData1',
                graphicVariables: {
                    identifier: {
                        recordSet: 'csvData1',
                        dataVariable: 'CASE_NUMBER',
                        graphicVariableType: 'identifier',
                        graphicVariableId: 'identifier'
                    },
                    x: {
                        recordSet: 'csvData1',
                        dataVariable: 'CASE_NUMBER',
                        graphicVariableType: 'axis',
                        graphicVariableId: 'axis'
                    },
                    y: {
                        recordSet: 'csvData1',
                        dataVariable: 'CASE_NUMBER',
                        graphicVariableType: 'axis',
                        graphicVariableId: 'axis'
                    },
                    areaSize: {
                        recordSet: 'csvData1',
                        dataVariable: 'N_OPIOID_PRESCRIPTIONS',
                        graphicVariableType: 'areaSize',
                        graphicVariableId: 'areaSize'
                    },
                    color: {
                        recordSet: 'csvData1',
                        dataVariable: 'SEX',
                        graphicVariableType: 'color',
                        graphicVariableId: 'color'
                    },
                    strokeColor: {
                        recordSet: 'csvData1',
                        dataVariable: 'HOME_STATE',
                        graphicVariableType: 'color',
                        graphicVariableId: 'color'
                    }
                }
            }, project),
        )

        project.visualizations.push(
            new ScatterplotVisualization({
                id: 'SG01',
                template: 'scattergraph',
                properties: {
                    enableTooltip: true,
                    gridlines: true,
                    showAxisLabels: false,
                    showAxisIndicators: false
                },
                graphicSymbols: {
                    points: 'opioidDeaths'
                }
            }, project),
        )
        
        const yamlString = await ProjectSerializer.toYAML(project);
        return yamlString;
    } catch (e) {
        console.log(e);
        return undefined
    }
}

read(process.argv[2]).then((project) => {
    writeFileSync('data.yml', project, 'utf8');
    process.exit()
});