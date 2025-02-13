import { Component } from '@angular/core';
import { FetchService } from '../services/fetch.service';
import { NgIf,NgFor } from '@angular/common';

interface Fox {
  image: string;
}

@Component({
  selector: 'app-fox-list',
  imports: [NgIf,NgFor],
  templateUrl: './fox-list.component.html',
  styleUrl: './fox-list.component.css',
  providers: [FetchService]
})
export class FoxListComponent {
  foxes: Fox[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private foxService: FetchService) {}

  ngOnInit(): void {
    this.loadFoxes();
  }

  loadFoxes(): void {
    this.foxService
      .fetchList("https://randomfox.ca/floof/")
      .then((data) => {
        this.foxes = [{image: data.image}];
        console.log(this.foxes);
        this.isLoading = false;
      })
      .catch((error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      });
  }
}