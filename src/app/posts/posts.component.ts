import { Component, OnInit } from '@angular/core';
import {Post} from "../model/Post";
import {PostService} from "../servise/post.service";
import {IditpostdialogComponent} from "../iditpostdialog/iditpostdialog.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  newPost: Post;

  constructor(private postService: PostService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.initPosts();
  }

  initPosts() {
    this.postService.getAll().subscribe(response => {

      this.posts = response
    })
  }

  openEditPost(post: Post) {
   const modalRef = this.modalService.open(IditpostdialogComponent, { size: 'lg' });

   modalRef.componentInstance.post = {...post};
   modalRef.result.then(response => {

     this.initPosts();
   })
  }

  addPost() {

  }
}
