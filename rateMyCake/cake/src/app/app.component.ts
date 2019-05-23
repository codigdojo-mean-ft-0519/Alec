import { Component, OnInit } from '@angular/core';
import { Cake } from './cake.model';
import { CakeService } from './cake.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rate My Cake';
  cakes: Cake[];
  newCake: Cake = new Cake();
  selectedCake: Cake;

  constructor(private cakeService: CakeService) {}

  ngOnInit() {}

  getAllCakeFromService() {
    const observable: Observable<Cake[]> = this.cakeService.getCakes();
    observable.subscribe(data => this.cakes = data);
  }
  getCake(id: string){
    this.cakeService.getCake(id).subscribe( cake => this.selectedCake = cake)
  }
  onSubmit(){
    const observable = this.cakeService.createCake(this.newCake);
    observable.subscribe( data => {
      console.log(data);
      this.newCake = new Cake();
      this.getAllCakeFromService();
    });
  }
}
