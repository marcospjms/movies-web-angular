import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IMovie} from "../../../model/movie.interface";
import {ITableHeaderCell} from "../../../model/table-header.interface";
import {MovieService} from "../../../services/movie.service";

@Component({
  selector: 'app-list-movies',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListMoviesComponent implements OnInit {

  movies: IMovie[] | undefined = [];

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

  constructor(private _movieService: MovieService) {
  }

  async ngOnInit() {
    this.movies = await this._movieService.list().toPromise();
  }

  createMovie() {
    this.selectedMovie.emit({} as IMovie);
  }

  deleteMovie(id: number) {
    this._movieService.delete(id)
  }
}
