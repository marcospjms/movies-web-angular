import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITableHeaderCell} from "../../model/table-header.interface";
import {AbstractEntityService, RemoteResult} from "../../services/abstract-entity.service";

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

  currentPage = 0;
  pageSize = 5;
  totalEntities = 0;
  pages = [0];

  loading = false;

  async ngOnInit() {
    await this.fetch(this.currentPage);
  }

  async fetch(page: number, pageSize = 5) {
    this.loading = true;
    this.currentPage = page;
    this.pageSize = pageSize;
    const result: RemoteResult<any> | undefined = await this.service?.list(this.currentPage, this.pageSize).toPromise();
    if (!result) {
      throw 'Not found';
    }
    this.data = result.results;
    this.totalEntities = result.count;
    this.pages = [];
    for (let i = 0; i < this.totalEntities / this.pageSize; i++) {
      this.pages.push(i);
    }
    this.loading = false;
  }

  async delete(id: number) {
    await this.service?.delete(id)?.toPromise();
    await this.fetch(this.currentPage);
  }
}
