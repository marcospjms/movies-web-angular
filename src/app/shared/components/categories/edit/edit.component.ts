import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {ICategory} from "../../../model/category.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditCategoryComponent implements OnChanges {

  form: FormGroup = this._formBuilder.group({});

  @Input()
  category: ICategory | null = null;

  @Output()
  savedRequested: EventEmitter<ICategory> = new EventEmitter<ICategory>();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnChanges() {

    this.form = this._formBuilder.group(
      {
        id: [this.category?.id || ''],
        name: [this.category?.name || '', [Validators.required, Validators.minLength(2)]],
      }
    );

    this.form.controls['id'].disable();
  }

  save() {
    this.savedRequested.emit({...this.category, ...this.form.value} as ICategory);
  }

  isError(controlName: string, error: string) {
    return !!(this.form.controls[controlName].errors || [])[error];
  }
}
