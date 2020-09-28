import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from "../model/User";
import {AccountService} from "../servise/account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AppService} from "../servise/app.service";
import {subscribeOn} from "rxjs/operators";

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  errorMessage: string;
  currentUser: User;
  currentUserId: number = -1;

  constructor(private accountServise: AccountService, public router: Router,
               private appService: AppService) { }

  ngOnInit(): void {
      this.appService.findUser().subscribe((response: User)=>{
        this.currentUser=response;
      })
  }

  update() {
    this.accountServise.updateUser(this.currentUser).subscribe((result:boolean)=>{
      debugger
      if (result==true) this.router.navigate(['/profile']);
      else this.errorMessage="Ошибка сохранения. Пожалуйста скорректируйте введенные данные!"
    })
  }


}
