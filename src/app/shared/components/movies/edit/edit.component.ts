import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {IMovie} from "../../../model/movie.interface";
import {ICategory} from "../../../model/category.interface";

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditMovieComponent implements OnChanges {

  @Input()
  movie: IMovie | null = null;

  @Input()
  categories: ICategory[] = [];

  @Output()
  savedRequested: EventEmitter<IMovie> = new EventEmitter<IMovie>();

  innerMovie: IMovie | null = null;

  ngOnChanges() {
    if (this.movie) {
      this.innerMovie = { ...this.movie };
    }
  }

  save() {
    this.savedRequested.emit({ ...this.innerMovie, category: { ...this.innerMovie?.category }} as IMovie);
  }

  compareCategory(c1: ICategory, c2: ICategory) {
    return c1?.id === c2?.id;
  }
}
