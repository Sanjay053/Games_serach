import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  fetchGames() {
    return this.http.get('https://www.cheapshark.com/api/1.0/deals?upperPrice=15');
  }

}
