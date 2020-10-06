import { BEERS } from './mocks';
import { IBeer } from './../types/index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css'],
})
export class BeersListComponent implements OnInit {
  beers: IBeer[] = BEERS;
  selectedBeer: IBeer;

  constructor() {}

  ngOnInit(): void {}

  onSelectBeer(beer: IBeer): void {
    this.selectedBeer = beer;
  }
}
