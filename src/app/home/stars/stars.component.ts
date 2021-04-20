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

  rating: number
  starCount: number
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
    this.stars.push(this.starType.filled)
    for (let i = 1; i < this.starCount; i++) {
      this.stars.push(this.starType.outline);
    }
  }

  updateStars(value: number){
    for (let i = 0; i < value; i++) {
      this.stars[i] = this.starType.filled
    }
    for (let i = value; i < this.starCount; i++) {
      this.stars[i] = this.starType.outline
    }
  }

  onHover(value: number) {
    this.updateStars(value)
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
