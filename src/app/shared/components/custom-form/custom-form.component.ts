import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {IFormField} from "../../model/form-field";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AbstractEntityService} from "../../services/abstract-entity.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnChanges {

  @Input()
  title: string = '';

  @Input()
  fields: IFormField[] = [];

  @Input()
  service: AbstractEntityService<any> | null = null;

  model: any = {};

  innerModel: any = {};

  formGroup: FormGroup | null = null;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _formBuilder: FormBuilder,
  ) {
  }

  async ngOnChanges() {
    const id = this._activatedRoute.snapshot.paramMap.get('id');
    if (id && id != 'novo') {
      this.model = await this.service?.get(+id).toPromise();
    } else {
      this.model = {};
    }
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
    return !!(this.formGroup?.controls[controlName].errors || [])[error];
  }


  addEntity(field: IFormField) {
    this.innerModel[field.property] = (this.innerModel[field.property] || []).concat([
      this.formGroup?.controls[field.property + '_list'].value.toLowerCase(),
    ]);
  }

  deleteEntity(field: IFormField, roleIndex: number) {
    this.model[field.property].splice(roleIndex, 1)
  }


  async save() {
    await this.service?.saveOrUpdate({...this.innerModel, ...this.formGroup?.value}).toPromise();
    this._router.navigate(['../'], { relativeTo: this._activatedRoute })
  }

}
