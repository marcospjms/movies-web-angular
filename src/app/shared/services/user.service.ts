import {Injectable} from '@angular/core';
import {ICategory} from "../model/category.interface";
import {AbstractEntityService} from "./abstract-entity.service";
import {IMovie} from "../model/movie.interface";
import {CategoryService} from "./category.service";
import {IUser, rolesEnum} from "../model/user.interface";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractEntityService<IUser>{

  constructor(_httpClient: HttpClient) {
    super('http://localhost:8080/api/users', _httpClient);
  }
}
