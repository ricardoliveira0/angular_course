import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {

  private readonly MATRIX_SIZE: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly EMPTY: number = 0;

  private matrix: any;
  private noMovements: number;
  private win: any;

  private _player: number;
  private _showStart: boolean;
  private _showMatrix: boolean;
  private _showFinal: boolean;

  constructor() { }

  /**
   * Starts the game. Defines the default values.
   * 
   * @returns void
   */
  gameStartup(): void {
    this._showStart = true;
    this._showMatrix = false;
    this._showFinal = false;
    this.noMovements = 0;
    this._player = this.X;
    this.win = false;
    this.matrixStartup();
  }

  /**
   * Initializes the game matrix with empty values in every
   * position.
   * 
   * @returns void
   */
  matrixStartup(): void {
    this.matrix = [this.MATRIX_SIZE];
    for(let i = 0; i < this.MATRIX_SIZE; i++) {
      this.matrix[i] = [this.EMPTY, this.EMPTY, this.EMPTY];
    }
  }

  /**
   * Get the flag value that controls the start screen
   * to be displayed.
   * 
   * @returns boolean
   */
  get showStart(): boolean {
    return this._showStart;
  }

  /**
   * Get the flag value that controls the game screen
   * to be displayed.
   * 
   * @returns boolean
   */
   get showMatrix(): boolean {
    return this._showMatrix;
  }

  /**
   * Get the flag value that controls the finish screen
   * to be displayed.
   * 
   * @returns boolean
   */
   get showFinal(): boolean {
    return this._showFinal;
  }

  /**
   * Get the player that is about to play.
   * 
   * @returns number
   */
  get player(): number {
    return this._player;
  }

  /**
   * Set the flags needed to start the game.
   * 
   * @returns void
   */
  startGame(): void {
    this._showStart = false;
    this._showMatrix = true;
  }

  /**
   * Make a play, given the coords.
   * 
   * @param number posX
   * @param number posY
   * @returns void
   */
  play(posX: number, posY: number): void {
    
    //invalid play verification
    if(this.matrix[posX][posY] !== this.EMPTY || this.win) {
      return;
    }
    this.matrix[posX][posY] = this._player;
    this.noMovements++;
    this.win = this.endGame(posX, posY, this.matrix, this._player);
    this._player = (this._player === this.X) ? this.O: this.X;

    if(!this.win && this.noMovements < 9) {
      this.playCPU();
    }

    if(this.win !== false) {
      this._showFinal = true;
    }

    if(!this.win && this.noMovements === 9) {
      this._player = 0;
      this._showFinal = true;
    }

  }

  /**
   * 
   * @param line number
   * @param column number
   * @param matrix any
   * @param player number
   * @returns any
   */
  endGame(line: number, column: number, matrix: any, player: number) {
    let end: any = false;

    //line validation
    if(matrix[line][0] === player &&
      matrix[line][1] === player &&
      matrix[line][2] === player) {
      end = [[line, 0], [line, 1], [line, 2]];
    }

    //column validation
    if(matrix[0][column] === player &&
      matrix[1][column] === player &&
      matrix[2][column] === player) {
      end = [[0, column], [1, column], [2, column]];
    }
    
    //diagonals
    if(matrix[0][0] === player &&
      matrix[1][1] === player &&
      matrix[2][2] === player) {
      end = [[0, 0], [1, 1], [2, 2]];
    }

    if(matrix[0][2] === player &&
      matrix[1][1] === player &&
      matrix[2][0] === player) {
      end = [[0, 2], [1, 1], [2, 0]];
    }

    return end;

  }

  /**
   * Simulate a CPU play.
   * 
   * @returns void
   */
  playCPU(): void {
    // Verify a win move
    let move: number[] = this.getPlay(this.O);

    if(move.length <= 0) {
      // Avoid defeat
      move = this.getPlay(this.X);
    }

    if(move.length <= 0) {
      let moves: any = [];
      // Can't either win nor lose, play random
      for(let i = 0; i < this.MATRIX_SIZE; i++) {
        for(let j = 0; j < this.MATRIX_SIZE; j++) {

          if(this.matrix[i][j] === this.EMPTY) {
            moves.push([i, j]);
          }

        }
      }

      let k = Math.floor(Math.random() * (moves.length - 1));
      move = [moves[k][0], moves[k][1]];

    }

    this.matrix[move[0]][move[1]] = this._player;
    this.noMovements++;
    this.win = this.endGame(move[0], move[1], this.matrix, this._player);
    this._player = (this._player === this.X) ? this.O: this.X;

  }

  /**
   * Get a valid play that wins the game.
   * 
   * @param player number
   * @returns number[]
   */
  getPlay(player: number): number[] {
    let matrix = this.matrix;
    
    for(let i = 0; i < this.MATRIX_SIZE; i++) {
      for(let j = 0; j < this.MATRIX_SIZE; j++) {

        if(matrix[i][j] !== this.EMPTY) {
          continue;
        }

        matrix[i][j] = player;

        if (this.endGame(i, j, matrix, player)) {
          return [i, j];
        }

        matrix[i][j] = this.EMPTY;

      }
    }

    return []; 

  }

  /**
   * Returns if the X should be shown
   * at the given coords.
   * 
   * @param posX number
   * @param posY number
   * @returns boolean
   */
  displayX(posX: number, posY: number): boolean {
    return this.matrix[posX][posY] === this.X;
  }

  /**
   * Returns if the O should be shown
   * at the given coords.
   * 
   * @param posX number
   * @param posY number
   * @returns boolean
   */
  displayO(posX: number, posY: number): boolean {
    return this.matrix[posX][posY] === this.O;
  }

  displayWin(posX: number, posY: number) {
    
    let display: boolean = false;

    if(!this.win) {
      return display;
    }

    for(let pos of this.win) {

      if(pos[0] === posX && pos[1] === posY) {
        display = true;
        break;
      }

    }

    return display;

  }

  newGame(): void {
    this.gameStartup();
    this._showFinal = false;
    this._showStart = false;
    this._showMatrix = true;
  }

}
