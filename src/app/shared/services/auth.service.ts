import { Injectable } from '@angular/core';
import {Observable, of, ReplaySubject, Subject} from "rxjs";
import {IUser} from "../model/user.interface";
import {Router} from "@angular/router";

const USER_KEY = 'movies-web:loggedUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userChange: Subject<IUser | null> = new ReplaySubject(1);

  constructor(
    private _router: Router,
  ) {
    const user = JSON.parse(localStorage.getItem(USER_KEY) || '{}');
    this.userChange.next(user.id ? user : null);
  }

  login(username: string, password: string): Observable<boolean> {
    if (username && password) {
      const user = { id: Math.round(Math.random() * 1000), name: username, roles: [] };
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      this.userChange.next(user);
      this._router.navigate(['admin']);
      return of(true);
    }
    return of(false);
  }

  getCurrentUser(): Observable<IUser | null> {
    return this.userChange.asObservable();
  }

  logout() {
    this.userChange.next(null);
    localStorage.removeItem(USER_KEY);
    this._router.navigate(['login']);
  }
}
