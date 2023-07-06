import {Injectable} from '@angular/core';
import {ICategory} from "../model/category.interface";
import {AbstractEntityService} from "./abstract-entity.service";

const CATEGORIES: ICategory[] = [
  {
    id: 1,
    name: 'Ação',
  },
  {
    id: 2,
    name: 'Comédia'
  }
];

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends AbstractEntityService<ICategory>{

  constructor() {
    super(CATEGORIES, 'movies-web:categories');
  }
}
