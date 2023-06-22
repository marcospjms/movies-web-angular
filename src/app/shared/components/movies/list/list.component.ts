import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IMovie} from "../../../model/movie.interface";
import {ITableHeaderCell} from "../../../model/table-header.interface";

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

  header: ITableHeaderCell[] = [
    {
      label: '#',
      property: 'id',
    },
    {
      label: 'Nome',
      property: 'name',
    },
    {
      label: 'Categoria',
      formatter: (movie: IMovie) => {
        return movie?.category?.name || null;
      }
    },
  ];

  createMovie() {
    this.selectedMovie.emit({} as IMovie);
  }

  deleteMovie(index: number) {
    this.movies.splice(index, 1);
  }
}
