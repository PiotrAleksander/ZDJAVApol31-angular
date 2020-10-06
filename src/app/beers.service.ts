import { IBeer } from './types/index';
import { Injectable } from '@angular/core';
import { BEERS } from './mocks';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  constructor() {}

  getBeers(): Observable<IBeer[]> {
    return of(BEERS);
  }

  getBeer(id: number): Observable<IBeer> {
    return of(BEERS.find((beer) => beer.id === id));
  }
}
