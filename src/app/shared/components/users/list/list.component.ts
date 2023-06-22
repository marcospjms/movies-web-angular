import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from "../../../model/user.interface";
import {ITableHeaderCell} from "../../../model/table-header.interface";

@Component({
  selector: 'app-list-users',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListUsersComponent {

  @Input()
  users: IUser[] = [];

  @Output()
  selectedUser: EventEmitter<IUser> = new EventEmitter<IUser>();

  header: ITableHeaderCell[] = [
    {
      label: '#',
      property: 'id',
    },
    {
      label: 'Nome',
      property: 'name',
    },
    {
      label: 'Papeis',
      property: 'roles'
    }
  ]

  createUser() {
    this.selectedUser.emit({} as IUser);
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
  }
}
