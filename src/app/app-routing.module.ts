import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {LoggedGuard} from "./shared/guards/logged.guard";
import {UnloggedGuard} from "./shared/guards/unlogged.guard";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    canActivate: [UnloggedGuard],
    loadChildren: () => import('./routes/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [LoggedGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'categorias',
      },
      {
        path: 'categorias',
        loadChildren: () => import('./routes/categories/categories.module').then(m => m.CategoriesModule),
      },
      {
        path: 'filmes',
        loadChildren: () => import('./routes/movies/movies.module').then(m => m.MoviesModule),
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./routes/users/users.module').then(m => m.UsersModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
