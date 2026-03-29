import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentNumbersPanel } from './recent-numbers-panel';

describe('RecentNumbersPanel', () => {
  let component: RecentNumbersPanel;
  let fixture: ComponentFixture<RecentNumbersPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentNumbersPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentNumbersPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
