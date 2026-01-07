import { Component } from '@angular/core';
import { NumberTile } from "../number-tile/number-tile";
import { CallNumberPanel } from '../call-number-panel/call-number-panel';
import { BingoGameStore } from '../../services/bingoGameStore';
import { MaxPipe } from "../../shared/max.pipe";

@Component({
  selector: 'app-home',
  imports: [NumberTile, CallNumberPanel, MaxPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(public bingoStore: BingoGameStore) {

  }

}
