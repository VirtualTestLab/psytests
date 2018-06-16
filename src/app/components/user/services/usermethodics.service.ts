import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ApiSetting} from '../../../constants/api.setting';
import {HeadersContainer} from '../../utils/headersContainer';
import {Observable} from 'rxjs/Observable';
import {StorageKey} from '../../../constants/storage.key';
import {PassingTest} from '../../../domain/methodics/passingTest';
import {catchError} from 'rxjs/operators';

@Injectable()
export class UserMethodicsService {

  constructor(private httpClient: HttpClient) { }

  public getAvailableMethodics(): Observable<any> {
    return this.httpClient.get<any>(ApiSetting.API_ENDPOINT_URL + '/methodics/description/open', {headers : HeadersContainer.getTokenHeader()});
  }

  public getMethodicsById(id: string): Observable<any> {
    return this.httpClient.get<any>(ApiSetting.API_ENDPOINT_URL + '/methodics/get/' + id, {headers : HeadersContainer.getTokenHeader()});
  }

  public sendResultMethodics(passingFact: PassingTest, errorCathcer: (x) => any, responseCatcher?: () => any) {
    return this.httpClient.put(ApiSetting.API_ENDPOINT_URL + '/result/user/save', passingFact, {headers : HeadersContainer.getTokenAndJsonTypeHeaders()})
      .pipe(catchError(errorCathcer('Ошибка сервера. Попробуйте отправить ещё раз'))).subscribe(responseCatcher());
  }

}
