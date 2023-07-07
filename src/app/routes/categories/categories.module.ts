import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { ListCategoriesComponent } from './list/list.component';
import { EditCategoryComponent } from './edit/edit.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ListCategoriesComponent,
    EditCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule
  ]
})
export class CategoriesModule { }
