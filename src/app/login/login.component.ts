import { Component, OnInit } from '@angular/core';
import {AppService} from "../servise/app.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../model/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  errorMessage = 'Вы не авторизованы';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;


  constructor(private app: AppService, private http: HttpClient, private router: Router ) {
  }

  ngOnInit(): void {

  }

  handleLogin() {
    this.app.login(this.user).subscribe((result)=> {

      if (result) {
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Вы авторизованы';
      this.router.navigate(['/profile']);
      //this.router.navigate(['/login']);


    } else {
      this.invalidLogin = true;
      this.loginSuccess = false;
    }});
  }

}
