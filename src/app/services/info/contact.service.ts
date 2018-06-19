import { Injectable } from '@angular/core';
import {FullMethodics} from '../../domain/methodics/fullMethodics';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {HeadersContainer} from '../../components/utils/headersContainer';
import {ApiSetting} from '../../constants/api.setting';
import {Contact} from '../../domain/info/contact';

@Injectable()
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  public createContact(contact: Contact, errorCathcer: (x) => any, responseCatcher?: () => any) {
    this.httpClient.put<any>(ApiSetting.API_ENDPOINT_URL + '/contacts/create', contact, {headers : HeadersContainer.getTokenHeader()})
      .pipe(catchError(errorCathcer('Ошибка сервера. Попробуйте отправить ещё раз'))).subscribe(responseCatcher());
  }
  public updateContact(contact: Contact, errorCathcer: (x) => any, responseCatcher?: () => any) {
    this.httpClient.post<any>(ApiSetting.API_ENDPOINT_URL + '/contacts/update', contact, {headers : HeadersContainer.getTokenHeader()})
      .pipe(catchError(errorCathcer('Ошибка сервера. Попробуйте отправить ещё раз'))).subscribe(responseCatcher());
  }

  public deleteContactById(id: string): Observable<any> {
    return this.httpClient.get<any>(ApiSetting.API_ENDPOINT_URL + '/contacts/delete/' + id, {headers : HeadersContainer.getTokenHeader()});
  }

  public getAll(): Observable<any> {
    return this.httpClient.get<any>(ApiSetting.API_ENDPOINT_URL + '/contacts/get', {headers : HeadersContainer.getTokenHeader()});
  }

}
