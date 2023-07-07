import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCategoriesComponent} from "./list/list.component";
import {EditCategoryComponent} from "./edit/edit.component";

const routes: Routes = [
  {
    path: '',
    component: ListCategoriesComponent
  },
  {
    path: ':id',
    component: EditCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
