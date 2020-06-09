import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Post} from "../model/Post";
import {PostService} from "../servise/post.service";
import {PostsComponent} from "../posts/posts.component";

@Component({
  selector: 'app-iditpostdialog',
  templateUrl: './iditpostdialog.component.html',
  styleUrls: ['./iditpostdialog.component.css']
})
export class IditpostdialogComponent implements OnInit {

  @Input() post: Post;

  constructor(public activeModal: NgbActiveModal,
              private postServise: PostService// ссылка на сервис для работы с данными
              ) {}

  ngOnInit(): void {
  }

  onConfirm() {
    this.postServise.update(this.post).subscribe(() => {
      this.activeModal.close('closed')
    });


  }

  dialogWindowGlose() {
    this.activeModal.close('closed')
  }

  deletePost(post: Post) {
    this.postServise.deletePost(post.id).subscribe(() => {
      this.activeModal.close('closed')
    });
  }
}
