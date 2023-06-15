import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {ICategory} from "../../../model/category.interface";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditCategoryComponent implements OnChanges {

  @Input()
  category: ICategory | null = null;

  @Output()
  savedRequested: EventEmitter<ICategory> = new EventEmitter<ICategory>();

  innerCategory: ICategory | null = null;

  ngOnChanges() {
    if (this.category) {
      this.innerCategory = { ...this.category };
    }
  }
}
