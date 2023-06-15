import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListMoviesPublicComponent } from './list-movies/list-movies.component';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { DivManipulationComponent } from './div-manipulation/div-manipulation.component';
import {FormsModule} from "@angular/forms";
import { BoxComponent } from './div-manipulation/box/box.component';
import { ListCategoriesComponent } from './categories/list/list.component';
import { EditCategoryComponent } from './categories/edit/edit.component';
import {ListMoviesComponent} from "./movies/list/list.component";
import {EditMovieComponent} from "./movies/edit/edit.component";

const COMPONENTS: any[] = [
  ContainerComponent,
  SidebarComponent,
  ListMoviesPublicComponent,
  FavoriteMoviesComponent,
  UserInfoComponent,
  LeftMenuComponent,
  MoviesDetailsComponent,
  DivManipulationComponent,
  BoxComponent,
  ListCategoriesComponent,
  EditCategoryComponent,
  ListMoviesComponent,
  EditMovieComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
    exports: [
        ...COMPONENTS,
    ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class SharedComponentsModule { }
