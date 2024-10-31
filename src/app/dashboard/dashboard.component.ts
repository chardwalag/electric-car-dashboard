import { Component } from '@angular/core';

import { Analytics, BatteryStatus, ChargingStations } from './types'
import { DashboardService } from './dashboard.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
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