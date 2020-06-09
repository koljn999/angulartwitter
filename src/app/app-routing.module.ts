import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: PostsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
