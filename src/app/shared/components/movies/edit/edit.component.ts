import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IMovie} from "../../../model/movie.interface";
import {ICategory} from "../../../model/category.interface";
import {formFieldTypeEnum, IFormField} from "../../../model/form-field";

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditMovieComponent {

  @Input()
  movie: IMovie | null = null;

  @Input()
  categories: ICategory[] = [];

  @Output()
  saveRequested: EventEmitter<IMovie> = new EventEmitter<IMovie>();

  fields: IFormField[] = []

  ngOnChanges() {
    this.fields = [
      {
        property: 'id',
        label: 'Id',
        type: formFieldTypeEnum.text,
        disabled: true,
      },
      {
        property: 'name',
        label: 'Nome',
        type: formFieldTypeEnum.text,
      },
      {
        property: 'category',
        label: 'Categoria',
        type: formFieldTypeEnum.select,
        options: this.categories.map(category => ({ label: category.name, value: category })),
        compareFunc: (c1: ICategory, c2: ICategory) => {
          return c1?.id === c2?.id;
        },
      },
    ]
  }
}
