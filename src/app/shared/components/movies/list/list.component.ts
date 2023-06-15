import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IMovie} from "../../../model/movie.interface";

@Component({
  selector: 'app-list-movies',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListMoviesComponent {

  @Input()
  movies: IMovie[] = [];

  @Output()
  selectedMovie: EventEmitter<IMovie> = new EventEmitter<IMovie>();

  createMovie() {
    this.selectedMovie.emit({} as IMovie);
  }

  deleteMovie(index: number) {
    this.movies.splice(index, 1);
  }
}
