import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface RemoteResult<E> {
  results: E[];
  count: number;
}

interface IEntity {
  id: number;
}

export class AbstractEntityService<E extends IEntity> {

  constructor(
    protected url: string,
    private _httpClient: HttpClient,
  ) {
  }

  list(page: number = 0, size = 5): Observable<RemoteResult<E>> {
    const params = [
      `page=${page}`,
      `size=${size}`,
      `sort=id,`
    ]
    return this._httpClient.get<RemoteResult<E>>(`${this.url}?${params.join('&')}`);
  }

  get(id: number): Observable<E | null> {
    return this._httpClient.get<E>(this._getFinalUrl(id));
  }

  saveOrUpdate(e: E): Observable<E> {
    if (e.id) {
      return this._httpClient.put<E>(this._getFinalUrl(e.id), e);
    }
    return this._httpClient.post<E>(`${this.url}`, e);
  }

  delete(id: number): Observable<boolean> {
    return this._httpClient.delete<boolean>(this._getFinalUrl(id));
  }

  private _getFinalUrl(id: number) {
    return `${this.url}/${id}`;
  }

}
