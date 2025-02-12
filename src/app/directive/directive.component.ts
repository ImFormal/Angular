import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directive',
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  afficher: boolean = false;
  tab: number[] = [];
  nb: number = 0;
  
  toggle(): void{
    if(this.afficher){
      this.tab.push(++this.nb);
    }
    this.afficher = !this.afficher;
  }
}