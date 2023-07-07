import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from "../../../model/user.interface";
import {ITableHeaderCell} from "../../../model/table-header.interface";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-list-users',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListUsersComponent {

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
  ];

  constructor(public userService: UserService) {
  }
}
