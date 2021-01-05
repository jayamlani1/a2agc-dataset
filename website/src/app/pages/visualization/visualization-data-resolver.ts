import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { filter, pluck, take, tap, timeout } from 'rxjs/operators';

import { Visualization, VisualizationsState } from '../../core/state/visualizations/visualizations.state';


@Injectable({ providedIn: 'root' })
export class VisualizationDataResolver implements Resolve<Visualization> {
  constructor(private readonly service: VisualizationsState) {}

  resolve(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<Visualization> {
    const id = route.paramMap.get('id');
    if (id === null) {
      return EMPTY;
    }

    return this.service.entities$.pipe(
      pluck(id),
      take(1)
    );
  }
}