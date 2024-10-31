import { Component } from '@angular/core';


@Component({
  selector: 'app-user-controls',
  templateUrl: './user-controls.component.html',
})
export class UserControlsComponent {
  
  startCharging() {
    console.log('Charging started');
  }

  stopCharging() {
    console.log('Charging stopped');
  }
}