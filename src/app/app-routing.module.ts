import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileComponent} from "./profile/profile.component";
import {UrlPermission} from "./urlPermission/url.permission";
import {EditprofileComponent} from "./editprofile/editprofile.component";


const routes: Routes = [
  {path: 'home', component: PostsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [UrlPermission]},
  { path: 'editprofile', component: EditprofileComponent, canActivate: [UrlPermission]},
  { path: '**', redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
