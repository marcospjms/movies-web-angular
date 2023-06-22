import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {IUser, rolesEnum} from "../../../model/user.interface";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditUserComponent implements OnChanges {

  @Input()
  user: IUser | null = null;

  @Output()
  savedRequested: EventEmitter<IUser> = new EventEmitter<IUser>();

  innerUser: IUser | null = null;

  roles: rolesEnum[] = Object.keys(rolesEnum).map(role => role.toLowerCase()) as rolesEnum[];
  selectedRole: rolesEnum | null = null;

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
    console.log(this.innerUser);
    if (!this.innerUser?.name) {
      return;
    }
     this.savedRequested.emit(this.innerUser);
  }
}
