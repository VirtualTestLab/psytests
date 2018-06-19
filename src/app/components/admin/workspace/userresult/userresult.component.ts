import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../../../services/profile.service';
import {UserCreds} from '../../../../domain/users/usercreds';

@Component({
  selector: 'app-userresult',
  templateUrl: './userresult.component.html',
  styleUrls: ['./userresult.component.css']
})
export class UserresultComponent implements OnInit {
  users: UserCreds[] = [];
  user: UserCreds;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
     this.profileService.getAll().subscribe(x => {
         const usersResponse: UserCreds[] = x;
         for (const user of usersResponse) {
           if (user.roleUser === 'ROLE_USER') {
             this.users.push(user);
           }
         }
       }
     );
  }

  select(user) {
    this.user = user;
  }
}
