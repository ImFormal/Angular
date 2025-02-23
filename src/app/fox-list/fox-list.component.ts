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
  audio: HTMLAudioElement | null = null;

  constructor(private foxService: FetchService) {}

  ngOnInit(): void {
    this.loadFoxes();
    this.enableAudioPlayback();
  }

  loadFoxes(): void {
    this.foxService
      .fetchList("https://randomfox.ca/floof/")
      .then((data) => {
        this.foxes = [{ image: data.image }];
        console.log(this.foxes);
        this.isLoading = false;
      })
      .catch((error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      });
  }

  enableAudioPlayback(): void {
    if (!this.audio) {
      this.audio = new Audio("assets/fox-song.mp3");
      this.audio.volume = 0.5;
      this.audio.loop = true;
      this.audio.play().catch(error => console.error("Lecture audio bloquée", error));
    }
  };

  ngOnDestroy(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
}
