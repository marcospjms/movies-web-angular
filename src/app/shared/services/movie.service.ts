import {Injectable} from '@angular/core';
import {ICategory} from "../model/category.interface";
import {AbstractEntityService} from "./abstract-entity.service";
import {IMovie} from "../model/movie.interface";
import {CategoryService} from "./category.service";

const MOVIES: IMovie[] = [
  { id: 1, name: 'Batman', description: 'Filme sobre o homem morcego', rate: 5, favorite: true },
  { id: 2, name: 'Batman e robing', description: 'Filme sobre o homem morcego e seu parceiro', rate: 4, favorite: true },
  { id: 3, name: 'Outro filme', description: 'Outro filme', rate: 1, favorite: true  },
];

@Injectable({
  providedIn: 'root'
})
export class MovieService extends AbstractEntityService<IMovie>{

  constructor(private _category: CategoryService) {
    super(MOVIES, 'movies-web:movies');
  }
}
