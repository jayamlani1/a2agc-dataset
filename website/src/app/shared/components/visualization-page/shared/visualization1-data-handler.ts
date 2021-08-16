/* eslint-disable @typescript-eslint/naming-convention */
import { loader, read, Runtime, View, ViewOptions } from 'vega';


const dataVariableMapping: Record<string, string> = {
  'Gender': 'SEX',
  'Age': 'AGE',
  'Opioid Prescriptions within last year before death': 'OPIOID_PRESCRIPTIONS_1YEAR',
  'Any Opioid Prescriptions before death': 'ANY_PRESCRIPTIONS',
  'Prescription vs. Illicit Drugs': 'ILLICIT_V_PRESCRIPTION'
};

export class VisualizationOneDataHandler {
  primaryKey = 'CASE_NUMBER';
  data: Record<string, unknown>[] = [];

  constructor(private view: View) {
    this.setData();

    this.view.addSignalListener('data_variable_selection', (_name, data: { LABEL: string[] }) =>
      this.updateDataVariable(data.LABEL && data.LABEL.length > 0 ? data.LABEL[0] : undefined)
    );
  }

  async setData(): Promise<void> {
    this.data = await loader()
      .load('assets/generated/vis-geomap-opioid-deaths.csv')
      .then((csv_data: string) =>
        read(csv_data, {
          type: 'csv',
          parse: {
            N_OPIOID_PRESCRIPTIONS: 'number',
            LATITUDE: 'number',
            LONGITUDE: 'number',
            PERIOD: 'date'
          }
        }) as Record<string, unknown>[]
      );
    this.updateDataVariable('Age');
  }

  async updateDataVariable(dataVariable?: string): Promise<void> {
    if (dataVariable) {
      const label = dataVariableMapping[dataVariable];
      await this.view.runAsync();
      this.view.data('source', this.data.filter((row) => row.DATA_VARIABLE === label));
    }
  }

  finalize(): void {
    this.data = [];
  }
}

export class VisualizationOneView extends View {
  dataHandler: VisualizationOneDataHandler;
  constructor(runtime: Runtime, opt?: ViewOptions) {
    super(runtime, opt);
    this.dataHandler = new VisualizationOneDataHandler(this);
  }
  finalize(): this {
    this.dataHandler.finalize();
    return super.finalize();
  }
}
