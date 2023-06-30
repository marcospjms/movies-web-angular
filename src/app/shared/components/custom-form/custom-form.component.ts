import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {IFormField} from "../../model/form-field";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnChanges {

  @Input()
  fields: IFormField[] = [];

  @Input()
  model: any = {};

  innerModel: any = {};

  @Output()
  saveRequested: EventEmitter<any> = new EventEmitter<any>();

  formGroup: FormGroup = this._formBuilder.group({});

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnChanges(): void {
    this.innerModel = {...this.model};
    const formConfig: any = {};

    this.fields.forEach(field => {
      formConfig[field.property + (field.type === 'list' ? '_list' : '')] = [
        { value: this.innerModel[field.property], disabled: field.disabled }, [Validators.required],
      ];
    });


    this.formGroup = this._formBuilder.group(formConfig);
  }


  compareFunction(field: IFormField, o1: any, o2: any): boolean {
    return field.compareFunc ? field.compareFunc(o1, o2) : o1 === o2;
  }

  isError(controlName: string, error: string) {
    return !!(this.formGroup.controls[controlName].errors || [])[error];
  }


  addEntity(field: IFormField) {
    this.innerModel[field.property] = (this.innerModel[field.property] || []).concat([
      this.formGroup.controls[field.property + '_list'].value.toLowerCase(),
    ]);
  }

  deleteEntity(field: IFormField, roleIndex: number) {
    this.model[field.property].splice(roleIndex, 1)
  }


  save() {
    this.saveRequested.emit({...this.innerModel, ...this.formGroup.value});
  }

}
