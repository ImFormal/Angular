import { Component } from '@angular/core';
import { FetchService } from '../services/fetch.service';
import { NgIf,NgFor } from '@angular/common';

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-pokemon-list',
  imports: [NgIf,NgFor],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
  providers: [FetchService] // injection de service dans le composant
})
export class PokemonListComponent {
  pokemons: Pokemon[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private pokemonService: FetchService) {}

  //On execute dans ngOnit du composant pour charger la liste des pokemons dès le départ (lifeCycle hook)
  ngOnInit(): void {
    this.loadPokemons();
  }

  // Méthode pour charger la liste des pokemons (dans le composant)
  // Cela utilise fetchPokemonList du service PokemonService
  loadPokemons(): void {
    this.pokemonService
      .fetchList("https://tyradex.vercel.app/api/v1/gen/1")
      .then((data) => {
        // console.log(data);
        this.pokemons = data.map((pokemon: any) => (
          // console.log(pokemon.name.fr),
          {
          id: pokemon.pokedex_id,
          name: pokemon.name.fr,
          image: pokemon.sprites.regular,
        }));
        console.log(this.pokemons);

        this.isLoading = false;
      })
      .catch((error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      });
  }
}