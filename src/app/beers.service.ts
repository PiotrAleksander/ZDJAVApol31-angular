import { IBeer } from './types/index';
import { Injectable } from '@angular/core';
import { BEERS } from './mocks';

@Injectable({
  providedIn: 'root',
})
export class BeersService {
  constructor() {}

  getBeers(): IBeer[] {
    return BEERS;
  }
}
