import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUsersComponent } from './list/list.component';
import { EditUserComponent } from './edit/edit.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ListUsersComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
