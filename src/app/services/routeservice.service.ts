import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {StorageKey} from '../constants/storage.key';
import {UserHolderService} from './userholder.service';

@Injectable()
export class RouteService {

  constructor(private router: Router,
              private userHolder: UserHolderService) { }
  public forwardToWorkspace(): void {
    const role = this.userHolder.getRole();
    switch (role) {
      case 'ROLE_USER' : this.router.navigateByUrl('user/workspace/mainpage'); break;
      case 'ROLE_ADMIN' : this.router.navigateByUrl('admin/workspace/editpage'); break;
      default: break;
    }

  }
}
