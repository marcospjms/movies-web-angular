import { Injectable } from '@angular/core';
import {ICategory} from "../model/category.interface";
import {Observable, of} from "rxjs";

interface IEntity {
  id: number;
}

export class AbstractEntityService<E extends IEntity> {

  constructor(
    protected entities: E[] = [],
    private _storeKey: string,
  ) {
    this.entities = localStorage.getItem(this._storeKey)  ? JSON.parse(localStorage.getItem(this._storeKey) || '[]') : this.entities;
  }

  list(): Observable<E[]> {
    return of(this.entities);
  }

  saveOrUpdate(e: E) {
    const foundCategory = this.entities.find(c => c.id === e.id);
    if (foundCategory) {
      Object.assign(foundCategory, e);
    } else {
      const nextId = Math.max(...this.entities.map(c => c.id));
      this.entities.push({...e, id: nextId + 1});
    }
    localStorage.setItem(this._storeKey, JSON.stringify(this.entities));
  }

  delete(id: number) {
    const index = this.entities.findIndex(entity => entity.id === id);
    this.entities.splice(index, 1);
    localStorage.setItem(this._storeKey, JSON.stringify(this.entities));
  }
}
