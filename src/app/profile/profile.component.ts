import { Component, OnInit } from '@angular/core';
import {AppService} from "../servise/app.service";
import {Router} from "@angular/router";
import {User} from "../model/User";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User;

  constructor(public appservise: AppService, public router: Router) {

  }

  findUser(){
    this.appservise.findUser().subscribe( (data: User)=> {

      this.currentUser = data;

    },
      error => {
        console.log(error);
      }
    )
  }

  ngOnInit(): void {
    this.findUser();
  }

  logOut(){
    this.appservise.logOut().subscribe(data=>{
      this.router.navigate(['/login']);
  }, error => {

});
}

}
