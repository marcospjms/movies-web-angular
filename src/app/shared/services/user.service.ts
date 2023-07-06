import {Injectable} from '@angular/core';
import {ICategory} from "../model/category.interface";
import {AbstractEntityService} from "./abstract-entity.service";
import {IMovie} from "../model/movie.interface";
import {CategoryService} from "./category.service";
import {IUser, rolesEnum} from "../model/user.interface";

const USERS: IUser[] = [
  {
    id: 1,
    name: 'Marcos Paulo',
    roles: [rolesEnum.MANAGER_CATEGORIES],
  },
  {
    id: 2,
    name: 'Paulo José',
    roles: [rolesEnum.USER, rolesEnum.MANAGER_MOVIES],
  },
];

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractEntityService<IUser>{

  constructor(private _category: CategoryService) {
    super(USERS, 'movies-web:users');
  }
}
