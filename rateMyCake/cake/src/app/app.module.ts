import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CakeService} from './cake.service';
import { RatingService} from './rating.service';
import { CakeStatsComponent } from './cake-stats/cake-stats.component';
@NgModule({
  declarations: [
    AppComponent,
    CakeStatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CakeService,RatingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
