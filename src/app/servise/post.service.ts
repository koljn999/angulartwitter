import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {TestData} from "../data/Test Data";
import {Post} from "../model/Post";
import {HttpClient} from "@angular/common/http";
import {AppService} from "./app.service";
import {AppComponent} from "../app.component";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private httpClient: HttpClient) {
  }

  // getAll(): Observable<Post[]> {
  //     let sortData = TestData.posts.sort((a, b) =>  b.date.valueOf() - a.date.valueOf() );
  //     return of(sortData);
  //
  // }

  update(post: Post): Observable<any>{
    return this.httpClient.post(AppComponent.API_URL+"/account/updatepost",  post).pipe (map(result=>{
      if (result) return true;
    }, error => {
      return false
    }))

  }
  //
  //
  // addPost(newPost: Post): Observable<any> {
  // // TestData.posts.push(newPost);
  // //   return of("true");
  // }
  //
  deletePost(post: Post): Observable<boolean> {
    return this.httpClient.post(AppComponent.API_URL+"/account/deletepost", post).pipe(map(result=>{
    return true;
    }))
  }


  getAllPostsCurrentUser(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(AppComponent.API_URL+"/account/posts");
  }

  addPost(newPost: Post) {
    return this.httpClient.post(AppComponent.API_URL+"/account/addpost",  newPost).pipe (map(result=>{
      if (result) return true;
    }, error => {
      return false
    }))
  }
}
