import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallNumberPanel } from './call-number-panel';

describe('CallNumberPanel', () => {
  let component: CallNumberPanel;
  let fixture: ComponentFixture<CallNumberPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallNumberPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallNumberPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
