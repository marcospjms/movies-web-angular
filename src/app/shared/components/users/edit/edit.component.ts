import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {IUser, rolesEnum} from "../../../model/user.interface";
import {formFieldTypeEnum, IFormField} from "../../../model/form-field";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditUserComponent implements OnChanges {

  @Input()
  user: IUser | null = null;

  @Output()
  saveRequested: EventEmitter<IUser> = new EventEmitter<IUser>();

  innerUser: IUser | null = null;

  roles: rolesEnum[] = Object.keys(rolesEnum).map(role => role.toLowerCase()) as rolesEnum[];
  selectedRole: rolesEnum | null = null;

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
  ]

  get validRoles() {
    return this.roles.filter(role => !this.innerUser?.roles.includes(role));
  }

  ngOnChanges() {
    console.log();
    if (this.user) {
      this.innerUser = { ...this.user };
    }
  }

  deleteRole(roleIndex: number) {
    this.innerUser?.roles.splice(roleIndex, 1);
  }

  addRole() {
    this.innerUser?.roles.push(this.selectedRole as rolesEnum);
    this.selectedRole = null;
  }

  save() {
    if (!this.innerUser?.name) {
      return;
    }
     this.saveRequested.emit(this.innerUser);
  }
}
