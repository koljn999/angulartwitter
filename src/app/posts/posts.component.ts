import {Component, OnChanges, OnInit} from '@angular/core';
import {Post} from "../model/Post";
import {PostService} from "../servise/post.service";
import {EditpostdialogComponent} from "../editpostdialog/editpostdialog.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TestData} from "../data/Test Data";
import {User} from "../model/User";
import {ProfileComponent} from "../profile/profile.component";
import {Observable} from "rxjs";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[];
  newPost: Post = new Post();
  addPostintServer: boolean=false;

  constructor(private postService: PostService, private modalService: NgbModal) { }

  ngOnInit(): void {

    this.newPostgonull();
    this.initPosts();

  }

  newPostgonull(): void{
   this.newPost = new Post(null, new User, '',null);
   this.newPost.content = ' ';
}

  initPosts() {
    this.postService.getAllPostsCurrentUser().subscribe(response => {
      debugger
      this.posts = response
      debugger
    })
  }

  openEditPost(post: Post) {
   const modalRef = this.modalService.open(EditpostdialogComponent, { size: 'lg' });

   modalRef.componentInstance.post = {...post};
   modalRef.result.then(response => {

     this.initPosts();
   })
  }

  addPost() {
    this.postService.addPost(this.newPost).subscribe( (data:boolean)=> {

        if (data) this.addPostintServer=true;

        this.newPostgonull();
        this.initPosts();
      },
      error => {
        console.log(error);
      }
    )
  }


  deletePost(post: Post) {
    this.postService.deletePost(post).subscribe((data: boolean) => {
      this.initPosts();
    });

  }
}
