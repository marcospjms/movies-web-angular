import {Component, EventEmitter, Output} from '@angular/core';
import {ICategory} from "../../../model/category.interface";
import {ITableHeaderCell} from "../../../model/table-header.interface";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-list-categories',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListCategoriesComponent {

  @Output()
  selectedCategory: EventEmitter<ICategory> = new EventEmitter<ICategory>();

  header: ITableHeaderCell[] = [
    {
      label: '#',
      property: 'id',
    },
    {
      label: 'Nome',
      property: 'name'
    }
  ];

  constructor(public categoryService: CategoryService) {
  }

  createCategory() {
    const newCategory = {} as ICategory;
    this.selectedCategory.emit(newCategory);
  }

  deleteCategory(id: number) {
    this.categoryService.delete(id)
  }
}
