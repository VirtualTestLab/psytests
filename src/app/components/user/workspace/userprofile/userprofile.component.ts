import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersInformation} from '../../../../domain/users/usersinformation';
import {UserprofileService} from '../../../../services/userprofile.service';
import {Location} from '@angular/common';
import {LoadingPictureController} from '../../../../services/loadingPictureController';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit, OnDestroy {

  userToSend: UsersInformation;

  constructor(private userService: UserprofileService,
              private location: Location) { }

  ngOnInit() {
    this.getUser();
  }
  ngOnDestroy(): void {
    LoadingPictureController.stopLoadingPicture();
  }

  getUser() {
     this.userToSend = new UsersInformation();
     LoadingPictureController.startLoadingPicture();
     this.userService.getProfileInformation().subscribe(
       x => {
         if (x !== null) {
           this.userToSend = x;
         }
         LoadingPictureController.stopLoadingPicture();
       }
     );
  }

  onGenderChange(value) {
    this.userToSend.gender = value;
  }
  onMeritalChange(value) {
    this.userToSend.maritalStatus = value;
  }

  onPlaseChange(value) {
    this.userToSend.placeResidence = value;
  }

  sendUserInfo() {
     this.userService.sendUserInformation(this.userToSend, () => { }, () => {
        this.location.back();
     });
  }
  reset () {
    this.userToSend = new UsersInformation();
  }
}
