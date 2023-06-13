import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games: Array<any> = [];
  searchTerm: string = '';
  filteredGames: Array<any> = [];
  currentPage: number = 1;

  constructor(private dataservice: DataService) {}

  ngOnInit() {
    this.call();
  }

  call() {
    this.dataservice.fetchGames().subscribe(
      response => {
        console.log(response);
        this.games = response as any[];
        this.filterGames();
      },
      error => {
        console.log("error ", error);
      }
    );
  }

  filterGames() {
    if (!this.searchTerm) {
      // If the search term is empty, show all games
      this.filteredGames = this.games;
    } else {
      // Filter games based on the search term
      this.filteredGames = this.games.filter(game =>
        game.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        game.storeID.toString().toLowerCase() === this.searchTerm.toLowerCase()
      );
    }
  }

  getTotalItems(): number {
    return this.filteredGames.length;
  }
}
