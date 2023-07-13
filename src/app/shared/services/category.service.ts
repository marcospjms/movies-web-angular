import {Injectable} from '@angular/core';
import {ICategory} from "../model/category.interface";
import {AbstractEntityService} from "./abstract-entity.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends AbstractEntityService<ICategory>{

  constructor(_httpClient: HttpClient) {
    super('', _httpClient);
  }
}
