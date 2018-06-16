import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {StorageKey} from '../../../constants/storage.key';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const role = localStorage.getItem(StorageKey.ROLE);
    if (role !== 'ROLE_ADMIN') {
        this.router.navigateByUrl('error/forbidden');
        return false;
    }
    return true;
  }
}
