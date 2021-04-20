import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AverageComponent } from './average/average.component';
import { RatingPage } from './rating.page';
import { StarsComponent } from './stars/stars.component';

const routes: Routes = [
  { path: '', component: RatingPage ,children:[
      {path: '', redirectTo: 'stars', pathMatch: 'full'}, 
      {path: 'stars',  component: StarsComponent}, 
      {path: 'average',  component: AverageComponent}, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatingPageRoutingModule {}
