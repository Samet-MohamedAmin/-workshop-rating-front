import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.scss']
})
export class AverageComponent implements OnInit {

  average: number

  constructor(public backendService: BackendService) { }

  ngOnInit() {
    this.backendService.getRatingsAverage().subscribe((x: {average: number}) => this.average = x.average)
  }

  getRemark():string {
    const index: number = Math.floor(this.average)
    const remark: string = RatingService.legend[index].remark
    return remark
  }

}
