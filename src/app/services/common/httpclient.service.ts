import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private httpclient: HttpClient, @Inject("baseurl") private baseurl: string) { }

  private url(RequestParameters: Partial<RequestParameters>): string {
    return `${RequestParameters.baseurl ? RequestParameters.baseurl : this.baseurl}/${RequestParameters.controller}${RequestParameters.action ? `/${RequestParameters.action}` : ""}`;
  }

  get<T>(RequestParameters: Partial<RequestParameters>, id?: string){
    let url: string = "";
    if (RequestParameters.fullEndPoint)
      url = RequestParameters.fullEndPoint;
    else
      url = `${this.url(RequestParameters)}${id ? `/${id}` : ""}`;

    return this.httpclient.get<T>(url, { headers: RequestParameters.headers });
  }

  put() {

  }

  post() {

  }

  delete() {

  }
}

export class RequestParameters {
  controller?: string;
  action?: string;
  headers?: HttpHeaders;
  baseurl?: string
  fullEndPoint?: string;
}