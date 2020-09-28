import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AppService} from "./app.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private app: AppService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   if (this.app.isUserLoggedIn()) {
  //     const authReq = req.clone({
  //       headers: new HttpHeaders({
  //         'Content-Type': 'application/json',
  //         'Authorization': this.app.getAuthHeader()
  //       })
  //     });
  //     return next.handle(req);
  //   } else {
  //     return next.handle(req);
  //   }
    return next.handle(req);
   }
}
