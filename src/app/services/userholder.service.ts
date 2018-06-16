import { Injectable } from '@angular/core';
import {StorageKey} from '../constants/storage.key';

@Injectable()
export class UserHolderService {
  constructor() { }

  public isAuthenticate(): boolean {
      return localStorage.getItem(StorageKey.ROLE) != null;
  }
  public getRole(): string {
    return localStorage.getItem(StorageKey.ROLE);
  }

  public getToken(): string {
    return localStorage.getItem(StorageKey.TOKEN);
  }
}
