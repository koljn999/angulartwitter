import { Component, OnInit } from '@angular/core';
import {AppService} from "../servise/app.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  errorMessage = 'Вы не авторизованы';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;


  constructor(private app: AppService, private http: HttpClient, private router: Router ) {
  }

  ngOnInit(): void {
    sessionStorage.clear();
  }

  handleLogin() {
    this.app.authenticationService(this.username, this.password).subscribe((result)=> {
      if (result) {
        debugger
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Вы авторизованы';
      this.router.navigate(['/home']);

    } else {
      this.invalidLogin = true;
      this.loginSuccess = false;
    }});
  }

}
