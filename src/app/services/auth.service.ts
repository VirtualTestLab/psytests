import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiSetting} from '../constants/api.setting';
import {StorageKey} from '../constants/storage.key';
import {UserHolderService} from './userholder.service';
import {RouteService} from './routeservice.service';
import {catchError} from 'rxjs/operators';

@Injectable()
export class AuthService {

  private authUrlToken = ApiSetting.API_ENDPOINT_URL + '/token/get';
  private headers: HttpHeaders = new HttpHeaders();
  constructor(private httpClient: HttpClient,
              private routeService: RouteService) { }
  public login(login: string, password: string, callback: () => any, errorHandler: () => any): void {
     this.headers.set('Content-Type', 'application/json');
     this.httpClient.post(this.authUrlToken, { login: login, password: password}, {headers : this.headers})
       .pipe(
         catchError(errorHandler)
       )
       .subscribe(response => {
         localStorage.setItem(StorageKey.TOKEN, response['access-token']);
         localStorage.setItem(StorageKey.ROLE, response['role']);
         callback();
    });
  }
  public logout(): void {
    localStorage.removeItem(StorageKey.TOKEN);
    localStorage.removeItem(StorageKey.ROLE);
  }


}
