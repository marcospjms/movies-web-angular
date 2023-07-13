import {Component} from '@angular/core';
import {IMovie} from "../../model/movie.interface";
import {FavoriteChange} from "../movies-details/movies-details.component";

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.scss']
})
export class FavoriteMoviesComponent {
  newFile: string = '';

  movies: IMovie[] = [
    { id: 1, title: 'Batman', description: 'Filme sobre o homem morcego', rate: 5, favorite: true, },
    { id: 2, title: 'Batman e robing', description: 'Filme sobre o homem morcego e seu parceiro', rate: 4, favorite: true },
    { id: 3, title: 'Outro filme', description: 'Outro filme', rate: 1, favorite: true },
  ];

  get favoriteMovies() {
    return this.movies//.filter(movie => movie.favorite);
  }

  changeFavorite($event: FavoriteChange, movie: IMovie) {
    console.log($event.movie === movie);
    movie.favorite = $event.favorite;
    // requisição http
  }
}
