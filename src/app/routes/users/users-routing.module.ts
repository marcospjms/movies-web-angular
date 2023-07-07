import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListUsersComponent} from "./list/list.component";
import {EditUserComponent} from "./edit/edit.component";

const routes: Routes = [
  {
    path: '',
    component: ListUsersComponent
  },
  {
    path: ':id',
    component: EditUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
