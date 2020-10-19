import { NgModule, Optional, SkipSelf } from '@angular/core';

import { ThemeModule } from './services/theme/theme.module';
import { StateModule } from './state/state.module';


@NgModule({
  imports: [
    StateModule,
    ThemeModule.forRoot({
      default: 'a2agc'
    })
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() other: CoreModule | null) {
    if (other) {
      throw new Error('CoreModule is imported twice!');
    }
  }
}
