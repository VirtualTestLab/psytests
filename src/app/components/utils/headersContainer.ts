import {StorageKey} from '../../constants/storage.key';
import {HttpHeaders} from '@angular/common/http';

export class HeadersContainer {
  static getContentTypeHeader(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json');
    return headers;
  }

  static getTokenHeader(): HttpHeaders {
    let  headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem(StorageKey.TOKEN));
    return headers;
  }

  static getTokenAndJsonTypeHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Content-type', 'application/json');
    headers = headers.set('Authorization', 'Bearer ' + localStorage.getItem(StorageKey.TOKEN));
    return headers;
  }
}
