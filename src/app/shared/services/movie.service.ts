import {Injectable} from '@angular/core';
import {AbstractEntityService} from "./abstract-entity.service";
import {IMovie} from "../model/movie.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService extends AbstractEntityService<IMovie>{

  constructor(_httpClient: HttpClient) {
    super('http://localhost:8080/api/movies', _httpClient);
  }
}
