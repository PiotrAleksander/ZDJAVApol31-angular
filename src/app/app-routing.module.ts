import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { BeersListComponent } from './beers-list/beers-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/beers', pathMatch: 'full' },
  { path: 'beers', component: BeersListComponent },
  { path: 'beer/:id', component: BeerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
