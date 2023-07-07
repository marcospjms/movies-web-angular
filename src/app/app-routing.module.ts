import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
