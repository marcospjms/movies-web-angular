import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {IUser, rolesEnum} from "../../../model/user.interface";
import {formFieldTypeEnum, IFormField} from "../../../model/form-field";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditUserComponent implements OnChanges {

  @Input()
  user: IUser | null = null;

  @Output()
  unselected: EventEmitter<IUser> = new EventEmitter<IUser>();

  innerUser: IUser | null = null;

  fields: IFormField[] =  [
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
      property: 'roles',
      label: 'Papeis',
      type: formFieldTypeEnum.list,
      options: Object.keys(rolesEnum).map(role => ({ label: role, value: role })),
    },
  ];

  constructor(public userService: UserService) {
  }

  ngOnChanges() {
    if (this.user) {
      this.innerUser = { ...this.user };
    }
  }
}
