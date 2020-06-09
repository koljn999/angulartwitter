import {Component, OnChanges, OnInit} from '@angular/core';
import {Post} from "../model/Post";
import {PostService} from "../servise/post.service";
import {IditpostdialogComponent} from "../iditpostdialog/iditpostdialog.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TestData} from "../data/Test Data";
import {User} from "../model/User";

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

    this.newPostgonull();
    this.initPosts();

  }

  newPostgonull(): void{
    this.newPost = new Post(null, new User('', '', ''), '',null);
  // this.newPost.content = ' ';
  // this.newPost.author.nikName = ' ';
  // this.newPost.author.firstName = ' ';
  // this.newPost.author.lastName = ' ';
}

  initPosts() {
    this.postService.getAllPosts().subscribe(response => {

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
    this.newPost.date =  new Date();
    this.newPost.id = TestData.length+1;
    this.postService.addPost(this.newPost).subscribe(() => {
      this.initPosts();
      this.newPostgonull();
    });
  }


  deletePost(post: Post) {
    this.postService.deletePost(post.id).subscribe(() => {
      this.initPosts();
    });

  }
}
