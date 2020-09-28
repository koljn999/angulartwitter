import { Component, OnInit } from '@angular/core';
import {User} from "../model/User";
import {AccountService} from "../servise/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  errorMessage: string;

  constructor(public accountService: AccountService, public router: Router) { }

  register(){
    this.accountService.createAccount(this.user).subscribe(data=>{
      this.router.navigate(['/login']);},
      error => {
        console.log(error);
        this.errorMessage = "Пользователь с таким email адресом уже зарегестрирован";
      }
    )

  }

  ngOnInit(): void {
  }



}
