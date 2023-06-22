import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ICategory} from "../../../model/category.interface";
import {ITableHeaderCell} from "../../../model/table-header.interface";

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

  createCategory() {
    this.selectedCategory.emit({} as ICategory);
  }

  deleteCategory(index: number) {
    this.categories.splice(index, 1);
  }
}
