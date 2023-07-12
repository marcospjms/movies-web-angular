import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form?: FormGroup | null = null;
  error = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }


  async login() {
    this.error = !!(await this._authService.login(this.form?.value['username'], this.form?.value['password']).toPromise());
  }
}
