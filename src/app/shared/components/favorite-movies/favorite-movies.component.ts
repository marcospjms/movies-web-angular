import { Component } from '@angular/core';
import { IMovie } from "../../model/movies.interface";

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent {
  movies: IMovie[] = [
    { id: 1, name: 'Batman', description: 'Filme sobre o homem morcego', rate: 5 },
    { id: 2, name: 'Batman e robing', description: 'Filme sobre o homem morcego e seu parceiro', rate: 4 },
    { id: 3, name: 'Outro filme', description: 'Outro filme', rate: 1 },
  ];
}
