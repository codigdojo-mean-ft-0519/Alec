import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs';
import {Cake} from './cake.model';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  constructor(private http: HttpClient) { }

  getCakes(): Observable<Cake[]> {
    return this.http.get<Cake[]>('/cakes');
  }
  getCake(id: string): Observable<Cake> {
    return this.http.get<Cake>(`/cake/${id}`);
  }
  createCake(cake: Cake): Observable<Cake> {
    return this.http.post<Cake>('/cake', cake);
  }
  updateCake(cake:Cake): Observable<Cake> {
    return this.http.put<Cake>(`/cakes/${cake._id}`, cake);
  }
}
