import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  standalone: true,
  imports: [CommonModule, MatCardModule],
})
export class AnalyticsComponent {
  metrics = [
    { name: 'Total Sessions', value: 1200 },
    { name: 'Average Session Duration', value: '5 minutes' },
    { name: 'Total Users', value: 800 },
    { name: 'Conversion Rate', value: '3%' }
  ];
}