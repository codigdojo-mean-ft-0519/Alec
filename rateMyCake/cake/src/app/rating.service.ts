import { Injectable } from '@angular/core';
import { Rating, Cake } from './cake.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  constructor(private http: HttpClient) { }

  addRating(rating: Rating): Observable<Rating> {
    return this.http.post<Rating>('/ratings', rating);
  }
}
