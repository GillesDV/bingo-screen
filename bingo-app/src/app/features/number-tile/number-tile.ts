import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { BingoGameStore } from '../../services/bingoGameStore';

@Component({
  selector: 'app-number-tile',
  imports: [NgClass],
  templateUrl: './number-tile.html',
  styleUrl: './number-tile.css',
})
export class NumberTile {
  @Input({ required: true })
  currentNumber!: number;

  @Input() isCalled = false;

  clickOnNumber() {
    //Don't modify isCalled here, because bingoStore should be the single source of truth
    if (!this.isCalled) {
      this.bingoStore.callNextNumber(this.currentNumber);
    }
    else {
      this.bingoStore.resetOneNumber(this.currentNumber);
    }
  }



  constructor(public bingoStore: BingoGameStore) {
  }

}
