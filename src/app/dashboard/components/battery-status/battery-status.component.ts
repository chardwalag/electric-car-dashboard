import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-battery-status',
  templateUrl: './battery-status.component.html',
})
export class BatteryStatusComponent {
  @Input() batteryLevel!: number;

  getBatteryStatus() {
    return this.batteryLevel > 20 ? 'Good' : 'Low';
  }
}