import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {ICategory} from "../../../model/category.interface";

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditMovieComponent implements OnChanges {

  @Input()
  movie: ICategory | null = null;

  @Output()
  savedRequested: EventEmitter<ICategory> = new EventEmitter<ICategory>();

  innerMovie: ICategory | null = null;

  ngOnChanges() {
    if (this.movie) {
      this.innerMovie = { ...this.movie };
    }
  }
}
