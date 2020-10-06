import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeersListComponent } from './beers-list/beers-list.component';

@NgModule({
  declarations: [AppComponent, BeerDetailsComponent, BeersListComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
