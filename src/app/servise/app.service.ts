import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // BASE_PATH: 'http://localhost:8092'
  private LOGIN: string = 'authenticatedUser';
  private BASIC_AUTH: string = 'basicAuthHeader';

  public username: string;
  public password: string;

  constructor(private http: HttpClient) {

  }

  authenticationService(username: string, password: string) {
    return this.http.get('http://localhost:4200/api/login',
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
      this.username = username;
      this.password = password;
      this.registerSuccessfulLogin(username, password);
    }));

  }

  createBasicAuthToken(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ":" + password);
  }

  getAuthHeader() : string {
    return sessionStorage.getItem(this.BASIC_AUTH);
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.LOGIN, username);
    sessionStorage.setItem(this.BASIC_AUTH, this.createBasicAuthToken(username, password));
  }

  logout() {
    sessionStorage.removeItem(this.LOGIN);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.LOGIN);
    if (user === null) return false;
    return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.LOGIN);
    if (user === null) return '';
    return user;
  }
}
