import {Component} from '@angular/core';
import {ICategory} from "../../model/category.interface";
import {IMovie} from "../../model/movie.interface";
import {IUser} from "../../model/user.interface";
import {CategoryService} from "../../services/category.service";
import {MovieService} from "../../services/movie.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  selectedCategory: ICategory | null = null;
  selectedMovie: IMovie | null = null;
  selectedUser: IUser | null = null;
  currentDate: Date = new Date();

  constructor(
    public categoryService: CategoryService,
    public movieService: MovieService,
    public userService: UserService,
  ) {
  }

}
