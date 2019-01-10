import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GamesService } from 'src/app/services/games.service';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  game : Game;
  edit : Boolean;

  constructor(private gamesServices : GamesService , private router : Router , private activatedRoute : ActivatedRoute) { 
    this.game = new Game();
  }

  saveNewGame() {
    delete this.game.created_at;
    delete this.game.id;
    this.gamesServices.saveGame(this.game).subscribe(
      (res : any ) => {
        console.log(res);
        this.router.navigate(['/games']);
      } ,
      (err) => console.log("err" , err.toString())
    )
  }

  updateGame(){
    delete this.game.created_at;
    this.gamesServices.updateGame(this.game.id , this.game ).subscribe(
      (res : any) => {
        console.log(res);
        this.router.navigate(['/games'])
      }, (err) => console.log("err" , err.toString())
    )
  }

  ngOnInit() {
    const params =  this.activatedRoute.snapshot.params;
    if ( params.id ) {
      this.gamesServices.getGame(params.id).subscribe(
        (res : Game) => {
          this.game = res;
          this.edit = true;
        } , (err) => console.log('err' , err.toString()) 
      )
    }
  }
}
