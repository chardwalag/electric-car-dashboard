import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MetricsParam } from '../types'


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  standalone: true,
  imports: [CommonModule, MatCardModule],
})
export class AnalyticsComponent {
  @Input() metrics!: MetricsParam[];
}