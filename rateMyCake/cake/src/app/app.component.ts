import { Component, OnInit } from '@angular/core';
import { Cake } from './cake.model';
import { CakeService } from './cake.service';
import { Observable } from 'rxjs';
import {RatingService} from './rating.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rate My Cake';
  cakes: Cake[] = [];
  newCake: Cake = new Cake();
  selectedCake: Cake;

  constructor(private cakeService: CakeService,
              private ratingService: RatingService) {}

  ngOnInit() { this.getAllCakeFromService(); }

  getAllCakeFromService() {
    const observable: Observable<Cake[]> = this.cakeService.getCakes();
    observable.subscribe(data => {
      this.cakes = data;
      // console.log(this.cakes);
    });
  }
  onSubmit(event: Event, form: NgForm) {
    // console.log(form.value);
    event.preventDefault();
    this.cakeService.createCake(form.value).subscribe(newCakeFromDB => {
    this.cakes.push(newCakeFromDB);
    });
    this.newCake = new Cake();
    form.reset();
  }
  onReviewCake(event: Event, form: NgForm, cake: string) {
    event.preventDefault();
    this.ratingService
      .addRating({ ...form.value, cake })
      .subscribe(newRating => {
        const foundCake = this.cakes.find(
          cakeFromArray => newRating.cake === cakeFromArray._id
        );
        foundCake.rating.push(newRating);
      });
  }
  onSelectCake(clickedCake: Cake) {
    // Define a "selectedCake" as our clickedCake. (we will use this information to send to our child!)
    // Otherwise, if selectedCake is already defined as our clicked cake, then turn it to back null.
    // The visual effect is toggling selectedCake on and off (and therefor our child toggles on and off)
    this.selectedCake = this.selectedCake === clickedCake ? null : clickedCake;
    console.log('Our selected task is....', this.selectedCake);
  }
}
