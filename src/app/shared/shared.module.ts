import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListMoviesPublicComponent } from './components/list-movies/list-movies.component';
import { FavoriteMoviesComponent } from './components/favorite-movies/favorite-movies.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { DivManipulationComponent } from './components/div-manipulation/div-manipulation.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BoxComponent } from './components/div-manipulation/box/box.component';
import { ListCategoriesComponent } from './components/categories/list/list.component';
import { EditCategoryComponent } from './components/categories/edit/edit.component';
import {ListMoviesComponent} from "./components/movies/list/list.component";
import {EditMovieComponent} from "./components/movies/edit/edit.component";
import {ListUsersComponent} from "./components/users/list/list.component";
import {EditUserComponent} from "./components/users/edit/edit.component";
import { ToggleComponent } from './components/toggle/toggle.component';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { CustomFormComponent } from './components/custom-form/custom-form.component';
import { Box2Directive } from './components/div-manipulation/box/box2.directive';
import {CustomTitlePipe} from "./pipes/custom-title.pipe";
import {CategoryService} from "./services/category.service";

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
  ListUsersComponent,
  EditUserComponent,
  ToggleComponent,
  CustomTableComponent,
  CustomFormComponent,
];

const DIRECTIVES = [
  Box2Directive,
];

const PIPES = [
  CustomTitlePipe,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
    exports: [
      ...COMPONENTS,
      ...DIRECTIVES,
      ...PIPES,
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
