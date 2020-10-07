import { IBeer } from './types/index';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { BEERS } from './mocks';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  baseUrl = 'https://api.punkapi.com/v2/';
  beersUrl = `${this.baseUrl}beers`;

  constructor(private httpClient: HttpClient) {}

  getBeers(): Observable<IBeer[]> {
    return this.httpClient.get<IBeer[]>(this.beersUrl);
  }

  getBeer(id: number): Observable<IBeer> {
    return of(BEERS.find((beer) => beer.id === id));
  }
}
