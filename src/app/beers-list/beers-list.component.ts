import { BeersService } from './../beers.service';
import { IBeer } from './../types/index';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css'],
})
export class BeersListComponent implements OnInit {
  beers: IBeer[];
  selectedBeer: IBeer;

  constructor(private beersService: BeersService) {}

  ngOnInit(): void {
    this.beers = this.beersService.getBeers();
  }

  onSelectBeer(beer: IBeer): void {
    this.selectedBeer = beer;
  }
}
