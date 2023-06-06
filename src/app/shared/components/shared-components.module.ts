import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';

const COMPONENTS: any[] = [
  ContainerComponent,
  SidebarComponent,
  ListMoviesComponent,
  FavoriteMoviesComponent,
  UserInfoComponent,
  LeftMenuComponent,
  MoviesDetailsComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
