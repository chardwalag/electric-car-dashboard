import { Component, Input } from '@angular/core';

import { MetricsParam } from '../../types'


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
})
export class AnalyticsComponent {
  @Input() metrics!: MetricsParam[];
}