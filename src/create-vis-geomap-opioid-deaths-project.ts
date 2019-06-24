import { ProjectSerializer, DefaultGraphicSymbol, ScatterplotVisualization, DefaultRawData } from '@dvl-fw/core';
import { readFileSync, writeFileSync } from 'fs';
import { basename } from 'path';

async function read(inData: string, baseRef: string) {
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
        
        const rawDataId = 'csvData1';
        const rawData = new DefaultRawData({
            id: rawDataId, template: 'csv', url: baseRef + fileName
        });
        project.rawData[0] = rawData;
        project.dataSources[0].properties.rawData = rawDataId;

        const yamlString = await ProjectSerializer.toYAML(project);
        return [yamlString, fileName.split('.').slice(0, -1).join('.')];
    } catch (e) {
        console.error(e);
        return [];
    }
}

// input arguments - 1) this script 2) path to csv 3) output directory path 4) basepath 
read(process.argv[2],process.argv[4]).then((ret: string[]) => {
    writeFileSync(process.argv[3] + ret[1] + '.yml', ret[0], 'utf8');
    process.exit()
});