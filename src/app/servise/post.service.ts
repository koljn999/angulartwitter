import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {TestData} from "../data/Test Data";
import {Post} from "../model/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {



    getAll(): Observable<Post[]> {
    return of(TestData.posts);
  }

  update(post: Post): Observable<any>{
  let p1 = TestData.posts.find(p => p.id === post.id);
  debugger
  p1.content = post.content;
  p1.author.firstName=post.author.firstName;
  p1.author.lastName=post.author.lastName;
  p1.author.nikName=post.author.nikName;
  return of(p1);

  }






}
