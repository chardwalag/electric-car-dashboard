import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-charging-stations',
  templateUrl: './charging-stations.component.html',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatListModule],
})
export class ChargingStationsComponent {
  stations = [
    { name: 'Station A', available: true },
    { name: 'Station B', available: false },
    { name: 'Station C', available: true },
  ];
}