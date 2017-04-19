import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Card } from '../shared/card';

const HS_API_KEY = 'PHAlPHeCasmshMGkZwsEdGaLMAiQp1BV8ECjsnCpoi7ekvH4Ay';
const HS_API_HEADER = 'X-Mashape-Key';

@Injectable()
export class HsApiService {
  private Header: Headers;

  constructor(private hs: Http) {
    const HeadersObject = {};
    HeadersObject[HS_API_HEADER] = HS_API_KEY;

    this.Header = new Headers(HeadersObject);
   }

   private _get(url: string): Observable<Response> {
    const Options: RequestOptions = new RequestOptions({headers: this.Header});
    return this.hs.get(url, Options);
  }

   getCardByName(name): Observable<Card> {
    const url = `https://omgvamp-hearthstone-v1.p.mashape.com/cards/${name}`;
    return this._get(url).map(r => {
      return r.json()[0];
    });
   }

}
