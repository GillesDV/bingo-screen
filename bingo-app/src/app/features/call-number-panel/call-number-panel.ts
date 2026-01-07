import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-call-number-panel',
  imports: [],
  templateUrl: './call-number-panel.html',
  styleUrl: './call-number-panel.css',
})
export class CallNumberPanel {

  @Output() clickedRandomNumber = new EventEmitter<void>();
  @Output() clickedReset = new EventEmitter<void>();

}
