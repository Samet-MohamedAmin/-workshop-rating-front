import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BackendService } from 'src/app/services/backend.service';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements OnInit {

  rating: number = 0
  starCount: number = 5
  ratingLocalStorageKey = "rating"
  starType = {
    outline: "star-outline",
    filled: "star",
  }
  stars = []

  constructor(public toastController: ToastController, private backendService: BackendService) {}


  ngOnInit() {
    this.rating = parseInt(localStorage.getItem(this.ratingLocalStorageKey)) || 1
    this.starCount = RatingService.MAX_ITEMS;
    for (let i = 0; i < this.starCount; i++) {
      this.stars.push(this.starType.outline);
    }
  }

  getStars(){
    let stars = []
    for (let i = 0; i < this.rating; i++) {
      stars[i] = this.starType.filled
    }
    for (let i = this.rating; i < this.starCount; i++) {
      stars[i] = this.starType.outline
    }
    return stars
  }

  onHover(value: number) {
    this.rating = value
  }

  onClick() {
    localStorage.setItem(this.ratingLocalStorageKey, this.rating.toString())
    this.backendService.sendRating(this.rating).subscribe();
    this.presentToast()
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your rating has been submitted',
      duration: 2000
    });
    toast.present();
  }
}
