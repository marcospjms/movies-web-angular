import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
  constructor(
    private _authService: AuthService,
    private _router: Router,
  ) {
  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
    const user = await this._authService.getCurrentUser().pipe(take(1)).toPromise();
    if (!user) {
      this._router.navigate(['.', 'login']);
    }
    return !!user;
  }

}
