import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private httpclient: HttpClient, @Inject("baseurl") private baseurl: string) { }

  private url(RequestParameters: Partial<RequestParameters>): string {
    return `${RequestParameters.baseurl ? RequestParameters.baseurl : this.baseurl}/${RequestParameters.controller}${RequestParameters.action ? `/${RequestParameters.action}` : ""}`;
  }

  get<T>(RequestParameters: Partial<RequestParameters>, id?: string): Observable<T>{
    let url: string = "";
    if (RequestParameters.fullEndPoint)
      url = RequestParameters.fullEndPoint;
    else
      url = `${this.url(RequestParameters)}${id ? `/${id}` : ""}` ;

    return this.httpclient.get<T>(url, { headers: RequestParameters.headers });
  }

  post<T>(RequestParameters: Partial<RequestParameters>, body: Partial<T>): Observable<T>{
    let url: string = "";
    if (RequestParameters.fullEndPoint)
      url = RequestParameters.fullEndPoint;
    else
      url = `${this.url(RequestParameters)}`;

     return this.httpclient.post<T>(url, body,{ headers: RequestParameters.headers });
  }

  put<T>(RequestParameters: Partial<RequestParameters>, body: Partial<T>): Observable<T>{
    let url: string = "";
    if (RequestParameters.fullEndPoint)
      url = RequestParameters.fullEndPoint;
    else
      url = `${this.url(RequestParameters)}`;

     return this.httpclient.put<T>(url, body,{ headers: RequestParameters.headers });
  }

  delete<T>(RequestParameters: Partial<RequestParameters>, id: number){
    let url: string = "";
    if (RequestParameters.fullEndPoint)
      url = RequestParameters.fullEndPoint;
    else
      url = `${this.url(RequestParameters)}/${id}`;

    return this.httpclient.delete<T>(url, { headers: RequestParameters.headers });
  }
}

export class RequestParameters {
  controller?: string;
  action?: string;
  headers?: HttpHeaders;
  baseurl?: string
  fullEndPoint?: string;
}