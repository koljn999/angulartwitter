import {Injectable} from '@angular/core';

import {User} from "../model/User";
import {AppComponent} from "../app.component";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Response } from '@angular/http';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {

  }

  public login(user: User): Observable<any> {

    let headers = new HttpHeaders().set("Content-Type", "application/json");
    headers = headers.append('Accept', 'application/json');
    // creating base64 encoded String from user name and password
    var base64Credential: string = btoa(user.username + ':' + user.password);
    headers = headers.append("Authorization", "Basic " + base64Credential);

    return this.http.get<any>(AppComponent.API_URL + "/account/login", {headers: headers})
      .pipe(
        map((response) => {
          // login successful if there's a jwt token in the response
          let username = response.principal.username;// the returned user object is a principal object
          if (username) {
            // store user details  in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', username);
            return user;
          }
        })
      );
  }
  logOut() {
    // remove user from local storage to log user out
    return this.http.post(AppComponent.API_URL+"logout",{}).pipe(
      map((response: Response) => {
        localStorage.removeItem('currentUser');
      })
    );
  }

  findUser<User>(){
    return this.http.get<User>(AppComponent.API_URL+"/account/profile").pipe(
      map((response: User)=>{

        let currentuser: User;

        currentuser=response;
        return currentuser;

      })
    )
  }

}
