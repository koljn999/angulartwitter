import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Post} from "../model/Post";
import {PostService} from "../servise/post.service";
import {PostsComponent} from "../posts/posts.component";
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-iditpostdialog',
  templateUrl: './editpostdialog.component.html',
  styleUrls: ['./editpostdialog.component.css']
})
export class EditpostdialogComponent implements OnInit {

  @Input() post: Post;

  constructor(public activeModal: NgbActiveModal,
              private postServise: PostService, // ссылка на сервис для работы с данными

              ) {}

  ngOnInit(): void {

  }

  onConfirm() {
    this.postServise.update(this.post).subscribe(() => {
      this.activeModal.close('closed');
    });


  }

  dialogWindowGlose() {
    this.activeModal.close('closed');
  }

  deletePost(post: Post) {
    this.postServise.deletePost(post).subscribe((data: boolean) => {
      this.activeModal.close('closed');
    });
  }
}
