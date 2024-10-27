import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BatteryStatusComponent } from '../battery-status/battery-status.component'
import { ChargingStationsComponent } from '../charging-stations/charging-stations.component'
import { UserControlsComponent } from '../user-controls/user-controls.component'
import { AnalyticsComponent } from '../analytics/analytics.component'


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatToolbarModule, BatteryStatusComponent, ChargingStationsComponent, UserControlsComponent, AnalyticsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}