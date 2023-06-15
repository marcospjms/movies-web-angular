import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IMovie} from "../../model/movie.interface";

export interface FavoriteChange {
  movie: IMovie | null;
  favorite: boolean
}

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent {

  @Input()
  movie: IMovie | null = null;

  @Output()
  favoriteChanged: EventEmitter<FavoriteChange> = new EventEmitter<FavoriteChange>();
}
