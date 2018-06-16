export class StateSaverService {

  public static saveUrlState(key: string, url: string) {
      localStorage.setItem(key, url);
  }
  public static getUrlStateByKey(key: string): string {
    return localStorage.getItem(key);
  }
  public static saveObjectState(key: string, object: any) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  public static getObjectState(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
  public static removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
