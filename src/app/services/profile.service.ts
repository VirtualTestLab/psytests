import { Injectable } from '@angular/core';
import {FileDescription} from '../domain/info/filedescription';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {HeadersContainer} from '../components/utils/headersContainer';
import {ApiSetting} from '../constants/api.setting';
import {UserCreds} from '../domain/users/usercreds';

@Injectable()
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  public createUserCreds(userCreds: UserCreds, errorCathcer: (x) => any): Observable<any> {
    return this.httpClient.put<any>(ApiSetting.API_ENDPOINT_URL + '/users/create', userCreds, {headers : HeadersContainer.getTokenHeader()})
      .pipe(catchError(errorCathcer('Ошибка сервера. Попробуйте отправить ещё раз')));
  }
  public updateUserCreds(userCreds: UserCreds, errorCathcer: (x) => any, responseCatcher?: () => any): Observable<any> {
    return this.httpClient.post<any>(ApiSetting.API_ENDPOINT_URL + '/users/update', userCreds, {headers : HeadersContainer.getTokenHeader()})
      .pipe(catchError(errorCathcer('Ошибка сервера. Попробуйте отправить ещё раз')));
  }

  public deleteUserCredsById(id: string): Observable<any> {
    return this.httpClient.get<any>(ApiSetting.API_ENDPOINT_URL + '/users/delete/' + id, {headers : HeadersContainer.getTokenHeader()});
  }

  public getAll(): Observable<any> {
    return this.httpClient.get<any>(ApiSetting.API_ENDPOINT_URL + '/users/get', {headers : HeadersContainer.getTokenHeader()});
  }

}
