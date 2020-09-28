import {Injectable, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserModule} from "@angular/platform-browser";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {ModalModule} from "ngx-bootstrap/modal";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AlertModule} from "ngx-bootstrap/alert";
import { PostsComponent } from './posts/posts.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import { MenuComponent } from './menu/menu.component';
import { EditpostdialogComponent } from './editpostdialog/editpostdialog.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import {AppService} from "./servise/app.service";
import {HttpInterceptorService} from "./servise/http-interceptor.service";
import {CookieService} from "ngx-cookie-service";
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {UrlPermission} from "./urlPermission/url.permission";
import {PostService} from "./servise/post.service";
import { EditprofileComponent } from './editprofile/editprofile.component';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    MenuComponent,
    EditpostdialogComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EditprofileComponent
  ],
  imports: [BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EditpostdialogComponent
  ],
  providers: [
    AppService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
    CookieService,
    UrlPermission,
    PostService
  ],
})
export class AppModule { }


