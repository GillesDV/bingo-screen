import { Component } from '@angular/core';
import { NumberTile } from "../number-tile/number-tile";

@Component({
  selector: 'app-home',
  imports: [NumberTile],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public maxNumbers = 75;

  public allBingoNumbers = Array.from({ length: this.maxNumbers }, (_, i) => i + 1);

}
