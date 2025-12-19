import { Component } from '@angular/core';
import { NumberTile } from "../number-tile/number-tile";

@Component({
  selector: 'app-home',
  imports: [NumberTile],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  public allBingoNumbers = Array.from({ length: 6 }, (_, i) => i); // change later to 75

}
