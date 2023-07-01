import {Component} from '@angular/core';
import {ICategory} from "../../model/category.interface";
import {IMovie} from "../../model/movie.interface";
import {IUser, rolesEnum} from "../../model/user.interface";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  categories: ICategory[] = [
    {
      id: 1,
      name: 'Ação',
    },
    {
      id: 2,
      name: 'Comédia'
    }
  ];

  movies: IMovie[] = [
    { id: 1, name: 'Batman', description: 'Filme sobre o homem morcego', rate: 5, favorite: true, category: this.categories[0] },
    { id: 2, name: 'Batman e robing', description: 'Filme sobre o homem morcego e seu parceiro', rate: 4, favorite: true, category: this.categories[0]  },
    { id: 3, name: 'Outro filme', description: 'Outro filme', rate: 1, favorite: true, category: this.categories[1]  },
  ];

  users: IUser[] = [
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

  selectedCategory: ICategory | null = null;
  selectedMovie: IMovie | null = null;
  selectedUser: IUser | null = null;
  currentDate: Date = new Date();

  constructor() {
  }


  saveCategory(category: ICategory) {
    const foundCategory = this.categories.find(c => c.id === category.id);
    if (foundCategory) {
      Object.assign(foundCategory, category);
    } else {
      const nextId = Math.max(...this.categories.map(c => c.id));
      this.categories.push({...category, id: nextId + 1});
    }
    this.selectedCategory = null;

  }

  saveMovie(movie: IMovie) {
    const foundMovie = this.movies.find(c => c.id === movie.id);
    if (foundMovie) {
      Object.assign(foundMovie, movie);
    } else {
      const nextId = Math.max(...this.movies.map(c => c.id));
      this.movies.push({...movie, id: nextId + 1});
    }
    this.selectedMovie = null;

  }

  saveUser(user: IUser) {
    const foundUser = this.users.find(c => c.id === user.id);
    if (foundUser) {
      Object.assign(foundUser, user, { roles: [...user.roles]});
    } else {
      const nextId = Math.max(...this.users.map(c => c.id));
      this.users.push({...user, id: nextId + 1});
    }
    this.selectedMovie = null;

  }
}
