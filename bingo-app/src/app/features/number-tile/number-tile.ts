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

  get isCalled(): boolean {
    return this.bingoStore.isCalled(this.currentNumber);
  }

  get getTileClass(): string {
    if (this.isNewest) return 'NewestSelected';

    if (this.isCalled) return 'AlreadySelected';

    return 'notSelected';
  }

  get isNewest(): boolean {
    return this.bingoStore.isNewest(this.currentNumber);
  }

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
