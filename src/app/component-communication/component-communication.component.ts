import { Component } from '@angular/core';
import { ActiveUserComponent } from '../active-user/active-user.component';
import { UserDataComponent } from '../user-data/user-data.component';
import { User } from '../models/user.interface';

@Component({
  selector: 'app-component-communication',
  imports: [ActiveUserComponent, UserDataComponent],
  templateUrl: './component-communication.component.html',
  styleUrl: './component-communication.component.css'
})
export class ComponentCommunicationComponent {
  user: User = {nom: "Kévin", age: 31};
  
    onDataChanged(userData: { nom: string, age: number }) {    
      this.user = userData;
    }
}
