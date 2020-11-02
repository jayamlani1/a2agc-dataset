import { Injectable } from '@angular/core';
import { DataAction, StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsImmutableDataRepository } from '@ngxs-labs/data/repositories';
import { State } from '@ngxs/store';
import { pluck } from 'rxjs/operators';

interface PageStateModel {
  hasShownHelpModal: boolean;
}

@StateRepository()
@State<PageStateModel>({
  name: 'page',
  defaults: {
    hasShownHelpModal: false
  }
})
@Injectable()
export class PageState extends NgxsImmutableDataRepository<PageStateModel> {
  readonly hasShownHelpModal$ = this.state$.pipe(pluck('hasShownHelpModal'));

  @DataAction()
  setHasShownHelpModal(hasShownHelpModal: boolean): void {
    this.ctx.patchState({ hasShownHelpModal });
  }
}
