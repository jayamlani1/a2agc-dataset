/* eslint-disable @typescript-eslint/naming-convention */
import { loader, read, Runtime, View, ViewOptions } from 'vega';


export class VisualizationSixDataHandler {
  srcData: Record<string, unknown>[] = [];
  subsets: Record<string, Record<string, unknown>[]> = {};

  constructor(private view: View) {
    this.setData();

    this.view.addSignalListener('data_variable_selection', (_name, data: { LABEL: string[] }) => {
      setTimeout(() => {
        this.updateDataVariable(data.LABEL && data.LABEL.length > 0 ? data.LABEL[0] : undefined);
      });
    });
  }

  async setData(): Promise<void> {
    const data = this.srcData = await loader()
      .load('assets/generated/visualization6/data.csv')
      .then((csv_data: string) =>
        read(csv_data, {
          type: 'csv',
          parse: {
            PERIOD: 'date',
            DOD: 'date',
            RANK: 'number',
            CASE_NUMBER: 'number',
            AGE: 'number',
            OVERDOSES: 'number',
            HEALTH_ENCOUNTERS: 'number',
            HEALTH_RANK: 'number',
            OVERDOSE_RANK: 'number',
            AGE_RANK: 'number'
          }
        }) as Record<string, unknown>[]
      );

    this.subsets['Overdoses'] = [...data]
      .sort((rowA, rowB) => (rowA.OVERDOSE_RANK as number) - (rowB.OVERDOSE_RANK as number))
      .map( x => ({ ...x, FINAL_RANK: x.OVERDOSE_RANK, RANK_TYPE: 'Overdoses' }));
    this.subsets['Health encounters'] = [...data]
      .sort((rowA, rowB) => (rowA.HEALTH_RANK as number) - (rowB.HEALTH_RANK as number))
      .map( x => ({ ...x, FINAL_RANK: x.HEALTH_RANK, RANK_TYPE: 'Health encounters' }));
    this.subsets['Age'] = [...data]
      .sort((rowA, rowB) => (rowA.AGE_RANK as number) - (rowB.AGE_RANK as number))
      .map( x => ({ ...x, FINAL_RANK: x.AGE_RANK, RANK_TYPE: 'Age' }));

    this.updateDataVariable('Health encounters');
  }

  async updateDataVariable(dataVariable?: string): Promise<void> {
    if (dataVariable) {
      const data = this.subsets[dataVariable] ?? [];
      this.view.data('source', data);
      this.view.resize();
      await this.view.runAsync();
    }
  }

  finalize(): void {
    this.subsets = {};
  }
}

export class VisualizationSixView extends View {
  dataHandler: VisualizationSixDataHandler;
  constructor(runtime: Runtime, opt?: ViewOptions) {
    super(runtime, opt);
    this.dataHandler = new VisualizationSixDataHandler(this);
  }
  finalize(): this {
    this.dataHandler.finalize();
    return super.finalize();
  }
}
