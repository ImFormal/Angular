import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-data',
  imports: [FormsModule],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent {
  @Output() userModified = new EventEmitter<{ nom: string; age: number }>();

  nom: string = '';
  age: number = 0;

  onDataChanged(){
    if(this.nom && this.age)
      this.userModified.emit({nom: this.nom, age: this.age});
  }
}
