import { Component } from '@angular/core';
import {ICategory} from "../../model/category.interface";
import {IMovie} from "../../model/movie.interface";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  showCategories = false;
  showMovies = true;

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

  selectedCategory: ICategory | null = null;


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
}
