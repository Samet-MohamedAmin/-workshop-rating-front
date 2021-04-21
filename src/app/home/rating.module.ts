import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RatingPage } from './rating.page';

import { RatingPageRoutingModule } from './rating-routing.module';
import { StarsComponent } from './stars/stars.component';
import { AverageComponent } from './average/average.component';
import { ProgressBarComponent } from './average/progress-bar/progress-bar.component';
import { RatingService } from '../services/rating.service';


@NgModule({
  declarations: [
    RatingPage,
    StarsComponent,
    AverageComponent,
    ProgressBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingPageRoutingModule
  ],
  providers:[
    RatingService
  ]
})
export class RatingPageModule {}
