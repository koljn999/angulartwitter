import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/User";
import {AppComponent} from "../app.component";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  createAccount(user:User): Observable<any>{
    return this.http.post(AppComponent.API_URL+'/account/register',user)
      .pipe(map(resp=>resp));
  }

  updateUser(user: User) {
    debugger
    return this.http.post(AppComponent.API_URL+'/account/edituser', user).pipe(map(resp=>resp));
  }
}
