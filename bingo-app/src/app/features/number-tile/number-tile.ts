import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-number-tile',
  imports: [NgClass],
  templateUrl: './number-tile.html',
  styleUrl: './number-tile.css',
})
export class NumberTile {
  @Input({ required: true })
  currentNumber!: number;

  //TODO merge with isCalled
  isSelected = false;

  @Input() isCalled = false;

  clickOnNumber() {
    this.isSelected = !this.isSelected;
  }

}
