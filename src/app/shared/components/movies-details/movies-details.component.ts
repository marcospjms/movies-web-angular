import { Component, Input } from '@angular/core';
import { IMovie } from "../../model/movies.interface";

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.scss']
})
export class MoviesDetailsComponent {

  @Input()
  movie: IMovie | null = null;

}
