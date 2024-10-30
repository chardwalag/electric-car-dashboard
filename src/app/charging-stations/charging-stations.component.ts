import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { StationsParam } from '../types'


@Component({
  selector: 'app-charging-stations',
  templateUrl: './charging-stations.component.html',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatListModule],
})
export class ChargingStationsComponent {
  @Input() stations!: StationsParam[];
}