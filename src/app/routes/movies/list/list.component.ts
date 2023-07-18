import {Component, OnInit} from '@angular/core';
import {IUser} from "../../../shared/model/user.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-routes-list-movies',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListMoviesComponent  implements OnInit {
  loggedUser: IUser | null = null;

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.loggedUser = this._activatedRoute.snapshot.data['loggedUser']
  }
}
