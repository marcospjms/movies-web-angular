import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { ListMoviesComponent } from './list/list.component';
import { EditMovieComponent } from './edit/edit.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ListMoviesComponent,
    EditMovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule { }
