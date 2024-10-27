import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-user-controls',
  templateUrl: './user-controls.component.html',
  standalone: true,
  imports: [MatCardModule],
})
export class UserControlsComponent {
  
  startCharging() {
    console.log('Charging started');
  }

  stopCharging() {
    console.log('Charging stopped');
  }
}