/* eslint-disable @typescript-eslint/naming-convention */
import { debounce, extent, loader, read, Runtime, View, ViewOptions } from 'vega';


type Vis6Data = Record<string, string | number>;

export class VisualizationSixDataHandler {
  data: Vis6Data[] = [];
  rankIndex: Map<number, number> = new Map();

  constructor(private view: View) {
    this.setData();

    this.view.addSignalListener('rank', debounce(1000, () =>
      this.view.runAfter(() => this.setRankSelection((this.view.signal('rank') as { RANK: number[] }).RANK))
    ));
  }

  async setData(): Promise<void> {
    const data = await loader()
      .load('assets/generated/visualization6/data.csv')
      .then((csv_data: string) =>
        read(csv_data, {
          type: 'csv',
          parse: {
            PERIOD:'date',
            DOD:'date',
            RANK: 'number'
          }
        }) as Vis6Data[]
      );

    for (const row of data) {
      row.TIME_BEFORE_DEATH = Math.round(12 * ((row.DOD as number) - (row.PERIOD as number)) / 3.154e+10);
    }
    this.data = data.filter((row) => row.TIME_BEFORE_DEATH >= 0);
    const rankIndex = this.rankIndex;
    this.data.forEach((row, index) => {
      const rank = row.RANK as number;
      if (!rankIndex.has(rank)) {
        rankIndex.set(rank, index);
      }
    });
    await this.view.runAsync();
    this.view.data('rank_dist', this.data);
    await this.view.runAsync();
    this.view.signal('rank', { RANK: [-952150367, -470172535] });
  }

  async setRankSelection(rankRange: number[]): Promise<void> {
    if (rankRange) {
      this.view.data('source', []);
      await this.view.runAsync();
      const indices = extent([...this.rankIndex.keys()].filter(rank => rank >= rankRange[0] && rank <= rankRange[rankRange.length - 1]));
      const filteredData = this.data.filter(row => row.RANK >= indices[0] && row.RANK <= indices[1]);
      console.log(filteredData.length);
      this.view.data('source', filteredData);
    }
  }

  finalize(): void {
    this.data = [];
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
