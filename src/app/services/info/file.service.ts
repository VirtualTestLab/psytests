import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {HeadersContainer} from '../../components/utils/headersContainer';
import {ApiSetting} from '../../constants/api.setting';
import {FileDescription} from '../../domain/info/filedescription';

@Injectable()
export class FileService {

  constructor(private httpClient: HttpClient) { }

  public createDocument(fileDescription: FileDescription, errorCathcer: (x) => any, responseCatcher?: () => any) {
    this.httpClient.put<any>(ApiSetting.API_ENDPOINT_URL + '/documents/create', fileDescription, {headers : HeadersContainer.getTokenHeader()})
      .pipe(catchError(errorCathcer('Ошибка сервера. Попробуйте отправить ещё раз'))).subscribe(responseCatcher());
  }
  public updateDocument(fileDescription: FileDescription, errorCathcer: (x) => any, responseCatcher?: () => any) {
    this.httpClient.post<any>(ApiSetting.API_ENDPOINT_URL + '/documents/update', fileDescription, {headers : HeadersContainer.getTokenHeader()})
      .pipe(catchError(errorCathcer('Ошибка сервера. Попробуйте отправить ещё раз'))).subscribe(responseCatcher());
  }

  public deleteDocumentById(id: string): Observable<any> {
    return this.httpClient.get<any>(ApiSetting.API_ENDPOINT_URL + '/documents/delete/' + id, {headers : HeadersContainer.getTokenHeader()});
  }

  public getAll(): Observable<any> {
    return this.httpClient.get<any>(ApiSetting.API_ENDPOINT_URL + '/documents/get', {headers : HeadersContainer.getTokenHeader()});
  }

}
