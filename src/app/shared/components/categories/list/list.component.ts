import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICategory} from "../../../model/category.interface";

@Component({
  selector: 'app-list-categories',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListCategoriesComponent {

  @Input()
  categories: ICategory[] = [];

  @Output()
  selectedCategory: EventEmitter<ICategory> = new EventEmitter<ICategory>();

  createCategory() {
    this.selectedCategory.emit({} as ICategory);
  }

  deleteCategory(index: number) {
    this.categories.splice(index, 1);
  }
}
