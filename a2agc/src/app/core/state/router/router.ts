import { Injectable, OnDestroy } from '@angular/core';
import { StateRepository } from '@ngxs-labs/data/decorators';
import { NgxsImmutableDataRepository } from '@ngxs-labs/data/repositories';
import { RouterNavigation } from '@ngxs/router-plugin';
import { Actions, ofActionCompleted, State } from '@ngxs/store';
import { Subject } from 'rxjs';
import { mapTo, takeUntil } from 'rxjs/operators';


@StateRepository()
@State({
  name: 'routerFacade'
})
@Injectable()
export class RouterState extends NgxsImmutableDataRepository<{}> implements OnDestroy {
  private readonly destroy$ = new Subject<void>();

  readonly navigationComplete$ = this.actions$.pipe(
    ofActionCompleted(RouterNavigation),
    mapTo(undefined),
    takeUntil(this.destroy$)
  );

  constructor(private readonly actions$: Actions) {
    super();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
