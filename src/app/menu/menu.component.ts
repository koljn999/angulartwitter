import { Component, OnInit } from '@angular/core';
import {AppService} from "../servise/app.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public appservise: AppService, public router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.appservise.logOut().subscribe(data=>{
      this.router.navigate(['/login']);
    }, error => {

    });
  }
}
