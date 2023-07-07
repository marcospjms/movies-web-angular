import {Component, Input} from '@angular/core';
import {ICategory} from "../../../model/category.interface";
import {FormBuilder} from "@angular/forms";
import {formFieldTypeEnum, IFormField} from "../../../model/form-field";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditCategoryComponent {

  fields: IFormField[] = [
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
  ];

  constructor(
    private _formBuilder: FormBuilder,
    public categoryService: CategoryService,
  ) {}
}
