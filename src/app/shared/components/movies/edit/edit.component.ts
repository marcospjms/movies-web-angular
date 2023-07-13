import {Component, OnInit} from '@angular/core';
import {ICategory} from "../../../model/category.interface";
import {formFieldTypeEnum, IFormField} from "../../../model/form-field";
import {CategoryService} from "../../../services/category.service";
import {MovieService} from "../../../services/movie.service";

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditMovieComponent implements OnInit {

  fields: IFormField[] = []

  constructor(
    private _categoryService: CategoryService,
    public movieService: MovieService,
  ) {
  }

  async ngOnInit() {
    const categories: ICategory[] = [];
    this.fields = [
      {
        property: 'id',
        label: 'Id',
        type: formFieldTypeEnum.text,
        disabled: true,
      },
      {
        property: 'title',
        label: 'Título',
        type: formFieldTypeEnum.text,
      },
      // {
      //   property: 'category',
      //   label: 'Categoria',
      //   type: formFieldTypeEnum.select,
      //   options: categories.map(category => ({ label: category.name, value: category })),
      //   compareFunc: (c1: ICategory, c2: ICategory) => {
      //     return c1?.id === c2?.id;
      //   },
      // },
    ]
  }
}
