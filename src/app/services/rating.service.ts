import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  public static legend: {remark: string, color: string}[] = [
    {remark: "Poor", color: "#de5430"},
    {remark: "Fair", color: "#eca360"},
    {remark: "Good", color: "#e8d28a"},
    {remark: "Very Good", color: "#65a06a"},
    {remark: "Excellent", color: "#449792"}
  ];

  public static MAX_ITEMS = RatingService.legend.length;


}
