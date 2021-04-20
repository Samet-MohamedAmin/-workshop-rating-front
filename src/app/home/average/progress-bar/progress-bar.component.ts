import { Component, Input, OnInit } from '@angular/core';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() progress: number
  @Input() max: number
  constructor() { }

  ngOnInit() {
  }

  getColor():string {
    const index: number = Math.floor(this.progress)
    const color: string = RatingService.legend[index].color
    return color
  }

  progresPercent():number {
    return this.progress*100/RatingService.MAX_ITEMS
  }

}
