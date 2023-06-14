import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  Simulation(): Observable<any> {
    return this.http.get<any>('https://free-to-play-games-database.p.rapidapi.com/api/games', {
      headers: {
        'X-RapidAPI-Key': 'c9c3369cd5mshde00609f62dad31p1caa4bjsn4f4578e8816a',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    });
  }
  
}
