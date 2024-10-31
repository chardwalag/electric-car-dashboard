import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BatteryStatusComponent } from '../battery-status/battery-status.component'
import { ChargingStationsComponent } from '../charging-stations/charging-stations.component'
import { UserControlsComponent } from '../user-controls/user-controls.component'
import { AnalyticsComponent } from '../analytics/analytics.component'
import { Analytics, BatteryStatus, ChargingStations } from '../types'
import { DashboardService } from './dashboard.service'


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatToolbarModule, BatteryStatusComponent, ChargingStationsComponent, UserControlsComponent, AnalyticsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  analytics: Analytics;
  batteryStatus: BatteryStatus;
  chargingStations: ChargingStations;

  constructor( private dashboardService: DashboardService ) {
    this.dashboardService = dashboardService
    const { analytics, batteryStatus, chargingStations } = this.dashboardService.getDashboardData();
    this.analytics = analytics
    this.batteryStatus = batteryStatus
    this.chargingStations = chargingStations
  }
}