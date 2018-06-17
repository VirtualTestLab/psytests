import { Injectable } from '@angular/core';
import {PassingTest} from '../domain/methodics/passingTest';
import {Observable} from 'rxjs/Observable';
import {ApiSetting} from '../constants/api.setting';
import {HttpClient} from '@angular/common/http';
import {HeadersContainer} from '../components/utils/headersContainer';
import {catchError} from 'rxjs/operators';
import {UsersInformation} from '../domain/users/usersinformation';

@Injectable()
export class UserprofileService {

  constructor(private httpClient: HttpClient) { }

  public getProfileInformation(): Observable<any> {
    return this.httpClient.get<any>(ApiSetting.API_ENDPOINT_URL + '/person/get', {headers : HeadersContainer.getTokenHeader()});
  }

  public sendUserInformation(usersInformation: UsersInformation, errorCathcer: (x) => any, responseCatcher?: () => any) {
    return this.httpClient.put(ApiSetting.API_ENDPOINT_URL + '/person/create', usersInformation, {headers : HeadersContainer.getTokenAndJsonTypeHeaders()})
      .pipe(catchError(errorCathcer('Ошибка сервера. Попробуйте отправить ещё раз'))).subscribe(responseCatcher());
  }

}
