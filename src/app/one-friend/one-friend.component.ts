import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Friend } from '../models/friend.interface';

@Component({
  selector: 'app-one-friend',
  imports: [CommonModule],
  templateUrl: './one-friend.component.html',
  styleUrl: './one-friend.component.css'
})
export class OneFriendComponent implements OnInit {
  @Input() friend!: Friend;

  ngOnInit(): void {
    Math.random() < 0.5 ? this.friend.status = "online" : this.friend.status = "offline";
  }

  getColor(){
    return this.friend.status === "online" ? "#2FD710" : "#D21F3C";
  }
  
}
