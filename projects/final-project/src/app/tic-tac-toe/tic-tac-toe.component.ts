import { Component, OnInit } from '@angular/core';

import { TicTacToeService } from './shared';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  constructor(private gameService: TicTacToeService) { }

  ngOnInit(): void {
    this.gameService.gameStartup();
  }

  get displayStart(): boolean {
    return this.gameService.showStart;
  }

  get displayMatrix(): boolean {
    return this.gameService.showMatrix;
  }

  get displayFinal(): boolean {
    return this.gameService.showFinal;
  }

  startGame($event: any): void {
    $event.preventDefault();
    this.gameService.startGame();
  }

  play(posX: number, posY: number): void {
    this.gameService.play(posX, posY);
  }

  displayX(posX: number, posY: number): boolean {
    return this.gameService.displayX(posX, posY);
  }

  displayO(posX: number, posY: number): boolean {
    return this.gameService.displayO(posX, posY);
  }

  displayWin(posX: number, posY: number): boolean {
    return this.gameService.displayWin(posX, posY);
  }

  get player(): number {
    return this.gameService.player;
  }

  newGame($event: any): void {
    $event.preventDefault();
    this.gameService.newGame();
  }

}
