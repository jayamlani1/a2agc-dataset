import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Visualization } from 'src/app/core/state/visualizations/visualizations.state';

@Component({
  selector: 'agc-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent {
  visualization?: Visualization;

  private readonly subscriptions = new Subscription();

  constructor(private route: ActivatedRoute) {
    const sub = route.data.subscribe(data => {
      this.visualization = data.visualization;
    });
    this.subscriptions.add(sub);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
