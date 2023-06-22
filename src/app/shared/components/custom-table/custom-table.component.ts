import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ITableHeaderCell} from "../../model/table-header.interface";

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent {

  @Input()
  title: string = '';

  @Input()
  header: ITableHeaderCell[] = [];

  @Input()
  data: any[] = [];

  @Output()
  selectedEntity: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  deletedEntity: EventEmitter<{ model: any, index: number }> = new EventEmitter<{ model: any, index: number }>();

  @Output()
  creationRequest: EventEmitter<boolean> = new EventEmitter<boolean>();
}
