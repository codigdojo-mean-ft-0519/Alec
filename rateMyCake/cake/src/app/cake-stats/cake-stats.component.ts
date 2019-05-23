import { Component, OnInit, Input } from '@angular/core';
import { Cake, Rating } from '../cake.model';

@Component({
  selector: 'app-cake-stats',
  templateUrl: './cake-stats.component.html',
  styleUrls: ['./cake-stats.component.css']
})
export class CakeStatsComponent implements OnInit {
  @Input() cakeToShow: Cake;
  constructor() { }

  ngOnInit() {
  }
}
