import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  PATH_RATING = "/ratings"
  PATH_RATING_AVERAGE = this.PATH_RATING + "/average"

  constructor(private http: HttpClient){}

  sendRating(rating: number){
    const URL:string = environment.BACKEND_URL + this.PATH_RATING;
    return this.http.post(URL, {rating: rating});
  }

  getRatingsAverage() {
    const URL:string = environment.BACKEND_URL + this.PATH_RATING_AVERAGE;
    return this.http.get(URL);
  }

}
