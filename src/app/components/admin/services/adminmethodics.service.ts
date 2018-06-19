import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiSetting} from '../../../constants/api.setting';
import {HttpClient} from '@angular/common/http';
import {HeadersContainer} from '../../utils/headersContainer';
import {catchError} from 'rxjs/operators';
import {FullMethodics} from '../../../domain/methodics/fullMethodics';

@Injectable()
export class AdminmethodicsService {

  constructor(private httpClient: HttpClient) { }

  public createMethoics(fullMethodics: FullMethodics, errorCathcer: (x) => any, responseCatcher?: () => any) {
    this.httpClient.put<any>(ApiSetting.API_ENDPOINT_URL + '/methodics/editor/create', fullMethodics, {headers : HeadersContainer.getTokenHeader()})
      .pipe(catchError(errorCathcer('Ошибка сервера. Попробуйте отправить ещё раз'))).subscribe(responseCatcher());
  }

  public deleteMethodicsById(id: string): Observable<any> {
    return this.httpClient.get<any>(ApiSetting.API_ENDPOINT_URL + '/methodics/editor/delete/' + id, {headers : HeadersContainer.getTokenHeader()});
  }

  public getAllMethodics(): Observable<any> {
    return this.httpClient.get<any>(ApiSetting.API_ENDPOINT_URL + '/methodics/description/get', {headers : HeadersContainer.getTokenHeader()});
  }

  public getAllMethodicsPassedByUser(userId: string): Observable<any> {
    return this.httpClient.get<any>(ApiSetting.API_ENDPOINT_URL + '/methodics/description/passed/' + userId, {headers : HeadersContainer.getTokenHeader()});
  }

  public deletePassingFact(userId: string, methodicsId: string) {
     return this.httpClient.get<any>(ApiSetting.API_ENDPOINT_URL + '/methodics/admin/manage/delete?userId=' + userId + '&methodicsId=' + methodicsId, {headers : HeadersContainer.getTokenHeader()});
  }

}
