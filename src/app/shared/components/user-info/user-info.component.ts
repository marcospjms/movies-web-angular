import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {IUser} from "../../model/user.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnDestroy {

  loggedUser: IUser | null = null;

  subscription: Subscription | null = null;

  constructor(private _authService: AuthService) {
  }

  ngOnInit() {
    this.subscription = this._authService.getCurrentUser().subscribe(user => {
      this.loggedUser = user;
      console.log('chamou', user)
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
