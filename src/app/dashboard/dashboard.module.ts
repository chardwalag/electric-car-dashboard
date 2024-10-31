import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DashboardComponent } from "./dashboard.component";
import { AnalyticsComponent } from "./components/analytics/analytics.component";
import { BatteryStatusComponent } from "./components/battery-status/battery-status.component";
import { ChargingStationsComponent } from "./components/charging-stations/charging-stations.component";
import { UserControlsComponent } from "./components/user-controls/user-controls.component";


@NgModule({
  declarations: [ DashboardComponent, AnalyticsComponent, BatteryStatusComponent, ChargingStationsComponent, UserControlsComponent ],
  imports: [ CommonModule, MatCardModule, MatProgressBarModule, MatListModule, MatToolbarModule ],
  exports: [ DashboardComponent ]
})
export class DashboardModule {}