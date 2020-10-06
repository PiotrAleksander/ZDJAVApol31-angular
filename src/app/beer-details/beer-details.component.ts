import { BeersService } from './../beers.service';
import { IBeer } from './../types/index';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css'],
})
export class BeerDetailsComponent implements OnInit {
  beer: IBeer;

  constructor(
    private beersService: BeersService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.beersService.getBeer(id).subscribe((beer) => {
      this.beer = beer;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
