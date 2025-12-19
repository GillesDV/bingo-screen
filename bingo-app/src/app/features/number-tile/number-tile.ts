import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-number-tile',
  imports: [NgClass],
  templateUrl: './number-tile.html',
  styleUrl: './number-tile.css',
})
export class NumberTile {
  @Input()
  currentNumber: number = 0;

  isSelected = false;

  clickOnNumber() {
    this.isSelected = !this.isSelected;
  }

}
