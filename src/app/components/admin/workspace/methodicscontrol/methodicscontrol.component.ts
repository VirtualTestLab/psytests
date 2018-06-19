import { Component, OnInit } from '@angular/core';
import {DescriptionMethodics} from '../../../../domain/methodics/descriptionMethodics';
import {LoadingPictureController} from '../../../../services/loadingPictureController';
import {AdminmethodicsService} from '../../services/adminmethodics.service';
import {ProfileService} from '../../../../services/profile.service';
import {UserCreds} from '../../../../domain/users/usercreds';

declare var $: any;

@Component({
  selector: 'app-methodicscontrol',
  templateUrl: './methodicscontrol.component.html',
  styleUrls: ['./methodicscontrol.component.css']
})
export class MethodicscontrolComponent implements OnInit {

  allMethodics: DescriptionMethodics[];
  openedMethodics: DescriptionMethodics = new DescriptionMethodics();
  users: UserCreds[] = [];
  constructor(private methodicsService: AdminmethodicsService,
              private profileService: ProfileService) { }
  getAllUsers() {
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
  ngOnInit() {
    LoadingPictureController.stopLoadingPicture();
    this.getAllMethodics();
  }
  getAllMethodics() {
    LoadingPictureController.startLoadingPicture();
    this.methodicsService.getAllMethodics().subscribe(x => {
      this.allMethodics = x;
      LoadingPictureController.stopLoadingPicture();
    });
  }

  deleteMethodics(methodics: DescriptionMethodics) {
    this.methodicsService.deleteMethodicsById(methodics.id.toString()).subscribe(x => this.getAllMethodics());
  }

  selectMethodics(methodics: DescriptionMethodics) {
    this.openedMethodics = methodics;
    this.getAllUsers();
  }

  openMethodicsForUser(user: UserCreds) {
    this.methodicsService.openMethodicsUser(user.id.toString(), this.openedMethodics.id.toString()).subscribe(
      x => {
        this.closeModal();
      }
    );
  }

  closeModal() {
     $('#closeButton').click();
  }
}
