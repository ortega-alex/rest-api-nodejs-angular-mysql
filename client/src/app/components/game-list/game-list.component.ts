import { Component, OnInit, HostBinding } from '@angular/core';

import { GamesService } from '../../services/games.service';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  games: Array<Game> = []
  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.getGames();
  }

  deleteGame(id: string) {
    this.gamesService.deleteGame(id).subscribe(
      (res: any) => {
        console.log(res);
        this.getGames();
      }, (err) => console.log('err', err.toString())
    )
  }

  getGames() {
    this.gamesService.getGames().subscribe(
      (res: Array<Game>) => {
        this.games = res;
      },
      err => console.log("err", err.toString())
    )
  }
}
