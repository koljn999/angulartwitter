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

  constructor(private app: AppService) { }
  ngOnInit(): void {
  }

  logout() {

    this.app.logout();
  }
}
