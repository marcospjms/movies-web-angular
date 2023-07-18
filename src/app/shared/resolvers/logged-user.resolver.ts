import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {IUser} from "../model/user.interface";

@Injectable({
  providedIn: 'root'
})
export class LoggedUserResolver implements Resolve<IUser | null> {
  constructor(private _authService: AuthService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser | null> {
    return this._authService.getCurrentUser();
  }
}
