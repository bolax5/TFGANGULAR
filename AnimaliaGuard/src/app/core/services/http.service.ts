import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlDecodderService } from './url-decodder.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private decoder: UrlDecodderService) { }

  get(url: string, params: any) {
    return this.http.get(this.decoder.getEndPoint(url), params);
  }

  post(url: string, params: any) {
    return this.http.post(this.decoder.getEndPoint(url), params);
  }
}
