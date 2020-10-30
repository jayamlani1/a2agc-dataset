import { NgModule, Type } from '@angular/core';
import { NgxsDataPluginModule } from '@ngxs-labs/data';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';

import { environment } from '../../../environments/environment';
import { RouterState } from './router/router.state';


const ROOT_STATES: Type<unknown>[] = [
  RouterState
];

@NgModule({
  imports: [
    // Note: Order of state modules is important!
    // The following described order MUST be maintained
    // 1. NgxsModule
    // 2. NgxsDataPluginModule
    // 3. NgxsStoragePluginModule
    // 4+. Other plugins
    // LAST. NgxsLoggerPluginModule
    NgxsModule.forRoot(ROOT_STATES, {
      developmentMode: !environment.production
    }),
    NgxsDataPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: []
    }),
    NgxsRouterPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    }),
  ]
})
export class StateModule { }
