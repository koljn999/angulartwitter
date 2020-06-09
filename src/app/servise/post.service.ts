import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {TestData} from "../data/Test Data";
import {Post} from "../model/Post";
import {HttpClient} from "@angular/common/http";

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
  let p1 = TestData.posts.find(p => p.id === post.id);
  p1.content = post.content;
  p1.author.firstName=post.author.firstName;
  p1.author.lastName=post.author.lastName;
  p1.author.nikName=post.author.nikName;
  return of(p1);

  }


  addPost(newPost: Post): Observable<any> {
  TestData.posts.push(newPost);
    return of("true");
  }

  deletePost(id: number): Observable<any> {
    const taskTmp = TestData.posts.find(t => t.id === id); // удаляем по id
    TestData.posts.splice(TestData.posts.indexOf(taskTmp), 1);
    return of("delete");
  }


  getAllPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>("/api/posts");
  }
}
