import { Injectable } from "@angular/core"


@Injectable({ providedIn: 'root' })
export class DashboardService {
  private dashboard_data = {
    analytics: {
      metrics: [
        { name: 'Total Sessions', value: 1200 },
        { name: 'Average Session Duration', value: '5 minutes' },
        { name: 'Total Users', value: 800 },
        { name: 'Conversion Rate', value: '3%' }
      ]
    },
    batteryStatus: {
      batteryLevel: 75
    },
    chargingStations: {
      stations: [
        { name: 'Station A', available: true },
        { name: 'Station B', available: false },
        { name: 'Station C', available: true },
      ]
    },
  }

  getDashboardData() {
    return this.dashboard_data
  }
}