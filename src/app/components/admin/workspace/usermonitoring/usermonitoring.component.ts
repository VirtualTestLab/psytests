import { Component, OnInit } from '@angular/core';
import {UserCreds} from '../../../../domain/users/usercreds';

@Component({
  selector: 'app-usermonitoring',
  templateUrl: './usermonitoring.component.html',
  styleUrls: ['./usermonitoring.component.css']
})
export class UsermonitoringComponent implements OnInit {

  users: UserCreds[];

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        id: 1,
        login: 'testLabUser',
        password: 'AS@32fasa@1!',
        roleUser: 'Пользователь'
      },
      {
        id: 2,
        login: 'testLabUser1',
        password: '123zxcAS!',
        roleUser: 'Пользователь'
      },
      {
        id: 3,
        login: 'testLabUser2',
        password: 'AS@32fasa@1!',
        roleUser: 'Пользователь'
      },
      {
        id: 4,
        login: 'testLabUser3',
        password: 'asjKLJ2)_&',
        roleUser: 'Пользователь'
      },
      {
        id: 5,
        login: 'testLabAdmin',
        password: '@#sd@jKhk',
        roleUser: 'Администратор'
      }
    ];
  }

}
