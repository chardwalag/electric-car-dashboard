import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@Component({
  selector: 'app-battery-status',
  templateUrl: './battery-status.component.html',
  standalone: true,
  imports: [MatCardModule, MatProgressBarModule],
})
export class BatteryStatusComponent {
  batteryLevel = 75;

  getBatteryStatus() {
    return this.batteryLevel > 20 ? 'Good' : 'Low';
  }
}