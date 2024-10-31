import { Component, Input } from '@angular/core';

import { StationsParam } from '../../types'


@Component({
  selector: 'app-charging-stations',
  templateUrl: './charging-stations.component.html',
})
export class ChargingStationsComponent {
  @Input() stations!: StationsParam[];
}