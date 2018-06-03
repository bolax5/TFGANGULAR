import { Injectable } from '@angular/core';
enum ENDPOINTS {
  '/login' = 'http://164.132.56.50:3000/login'
 }
@Injectable({
  providedIn: 'root'
})

export class UrlDecodderService {

  constructor() { }

  public getEndPoint(url: string): string {
    return ENDPOINTS[url];
  }

}
