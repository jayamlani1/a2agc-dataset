import { NgModule, Optional, SkipSelf } from '@angular/core';

import { BannerModule } from './components/banner/banner.module';
import { PageFooterModule } from './components/page-footer/page-footer.module';
import { PageHeaderModule } from './components/page-header/page-header.module';
import { ThemeModule } from './services/theme/theme.module';
import { StateModule } from './state/state.module';


@NgModule({
  imports: [
    StateModule,
    ThemeModule.forRoot(),

    PageHeaderModule,
    PageFooterModule,
    BannerModule
  ],
  exports: [
    PageHeaderModule,
    PageFooterModule,
    BannerModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() other: CoreModule | null) {
    if (other) {
      throw new Error('CoreModule should only be imported once in the AppModule!');
    }
  }
}
