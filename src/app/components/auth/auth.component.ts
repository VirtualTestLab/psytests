import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Credentials} from '../../domain/credentials';
import {RouteService} from '../../services/routeservice.service';
import {LoadingPictureController} from '../../services/loadingPictureController';

declare var $: any;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  credentials: Credentials = {
     login : '',
     password : ''
  };
  error = false;
  hiddenPass = true;
  constructor(private authService: AuthService,
              private routerService: RouteService) { }
  ngOnInit() {
    this.routerService.forwardToWorkspace();
  }
  logIn() {
    LoadingPictureController.startLoadingPicture();
    this.error = false;
    this.authService.login(this.credentials['login'], this.credentials['password'], () => {
      LoadingPictureController.stopLoadingPicture();
      this.error = false;
      this.routerService.forwardToWorkspace();
    }, () => {
      this.error = true;
      LoadingPictureController.stopLoadingPicture();
    });
  }

  updatePasswordStatus() {
     this.hiddenPass = !this.hiddenPass;
  }
}
