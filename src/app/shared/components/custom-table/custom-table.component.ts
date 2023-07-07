import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITableHeaderCell} from "../../model/table-header.interface";
import {AbstractEntityService} from "../../services/abstract-entity.service";

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

  @Input()
  title: string = '';

  @Input()
  service: AbstractEntityService<any> | null = null;

  @Input()
  header: ITableHeaderCell[] = [];

  data: any[] = [];

  @Output()
  selectedEntity: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  deletedEntity: EventEmitter<{ model: any, index: number }> = new EventEmitter<{ model: any, index: number }>();

  async ngOnInit() {
    this.data = await this.service?.list().toPromise() || [];
  }

}
