import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberTile } from './number-tile';

describe('NumberTile', () => {
  let component: NumberTile;
  let fixture: ComponentFixture<NumberTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberTile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberTile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
