import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Le service est disponible globalement
})
export class FetchService {

  async fetchList(url: string): Promise<any> {
    const response = await fetch(url);
    console.log(response);

    if (!response.ok) {
      throw new Error('Failed to fetch list');
    }
    return response.json();
  }
}