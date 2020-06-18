import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from "rxjs/operators";
import {CookieService} from "ngx-cookie-service";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // BASE_PATH: 'http://localhost:8092'
  private LOGIN: string = 'authenticatedUser';
  private BASIC_AUTH: string = 'basicAuthHeader';

  public username: string;
  public password: string;

  constructor(private http: HttpClient, private  cookieService: CookieService) {

  }

  authenticationService(username: string, password: string) {
      return of(this.http.post <Observable<boolean>>("/api/login", {
      nikName: username, password: password
    },
      // {
      //   headers: {authorization: this.createBasicAuthToken(username, password)},
      // }

        ).subscribe((res) => {
      if (res) {
        debugger
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username, password);
      }
      return  res;
    })
  )

  }

  createBasicAuthToken(username: string, password: string) {
    return 'Basic ' + window.btoa(username + ":" + password);
  }

  getAuthHeader(): string {
    return sessionStorage.getItem(this.BASIC_AUTH);
  }

  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(this.LOGIN, username);
    sessionStorage.setItem(this.BASIC_AUTH, this.createBasicAuthToken(username, password));
  }

  logout() {
    sessionStorage.removeItem(this.LOGIN);
    sessionStorage.removeItem(this.BASIC_AUTH);
    this.cookieService.deleteAll();
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(this.BASIC_AUTH);
    if (user === null) return false;
    return true;
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.LOGIN);
    if (user === null) return '';
    return user;
  }
}
