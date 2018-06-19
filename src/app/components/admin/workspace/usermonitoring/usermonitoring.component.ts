import { Component, OnInit } from '@angular/core';
import {UserCreds} from '../../../../domain/users/usercreds';
import {LoadingPictureController} from '../../../../services/loadingPictureController';
import {ProfileService} from '../../../../services/profile.service';

@Component({
  selector: 'app-usermonitoring',
  templateUrl: './usermonitoring.component.html',
  styleUrls: ['./usermonitoring.component.css']
})
export class UsermonitoringComponent implements OnInit {

  users: UserCreds[];
  newUser: UserCreds;
  text = 'Добавление нового пользователя';
  isNew = false;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    LoadingPictureController.startLoadingPicture();
    this.profileService.getAll().subscribe( x => {
      LoadingPictureController.stopLoadingPicture();
      this.users = x;
    } );
  }

  createNewUser() {
     this.isNew = true;
    this.text = 'Добавление нового пользователя';
     this.newUser = new UserCreds();
     this.newUser.roleUser = 'ROLE_USER';
     this.newUser.login = null;
     this.newUser.password = null;
  }

  onChangeRole(value) {
    this.newUser.roleUser = value;
  }

  saveNewUser() {
    LoadingPictureController.startLoadingPicture();
    if (this.isNew) {
      this.profileService.createUserCreds(this.newUser, x => {
      }).subscribe( x => {
        LoadingPictureController.stopLoadingPicture();
        this.getUsers();
      });
    } else {
      this.profileService.updateUserCreds(this.newUser, x => {
      }).subscribe(x => {
        LoadingPictureController.stopLoadingPicture();
        this.getUsers();
      });
    }
    this.cancel();
  }

  removeUser(user: UserCreds) {
    this.profileService.deleteUserCredsById(user.id.toString()).subscribe( x => { this.getUsers(); } );
  }
  cancel() {
    this.newUser = null;
  }

  editCurrent(user: UserCreds) {
    this.isNew = false;
    this.text = 'Изменение пользователя';
    this.newUser = new UserCreds();
    this.newUser.password = user.password;
    this.newUser.login = user.login;
    this.newUser.id = user.id;
    this.newUser.roleUser = user.roleUser;
  }
}
