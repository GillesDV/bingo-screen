import { Component } from '@angular/core';
import { BingoGameStore } from '../../services/bingoGameStore';

@Component({
  selector: 'app-recent-numbers-panel',
  imports: [],
  templateUrl: './recent-numbers-panel.html',
  styleUrl: './recent-numbers-panel.css',
})
export class RecentNumbersPanel {

  get recentNumbers(): number[] {
    return [...this.bingoStore.recentCalledNumbers];
  }

  constructor(public bingoStore: BingoGameStore) {
  }

}
