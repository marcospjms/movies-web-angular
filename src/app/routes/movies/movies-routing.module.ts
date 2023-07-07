import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListMoviesComponent} from "./list/list.component";
import {EditMovieComponent} from "./edit/edit.component";

const routes: Routes = [
  {
    path: '',
    component: ListMoviesComponent
  },
  {
    path: ':id',
    component: EditMovieComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
