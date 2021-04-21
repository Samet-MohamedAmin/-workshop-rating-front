import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges {

  @Input() progress: number = 0
  @Input() max: number = 5
  color: string = "grey"
  constructor() { }

  ngOnChanges(): void {
    this.color = this.getColor()
  }

  ngOnInit() {
  }

  getColor():string {
    let index: number = Math.floor(this.progress)
    if (index == 5) {
      index--
    }
    if(RatingService && RatingService.legend && RatingService.legend[index]) {
      const color: string = RatingService.legend[index].color
      return color
    } else {
      return "grey"
    }
  }

  progresPercent():number {
    return this.progress*100/RatingService.MAX_ITEMS
  }

}
