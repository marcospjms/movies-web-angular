import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import {Observable, take} from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class UnloggedGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private _router: Router,
  ) {

  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean>{
    const user = await this._authService.getCurrentUser().pipe(take(1)).toPromise();
    if (!!user) {
      this._router.navigate(['admin']);
    }
    return !user;
  }

}
