import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountStatisticsComponent } from './amount-statistics.component';

describe('AmountStatisticsComponent', () => {
  let component: AmountStatisticsComponent;
  let fixture: ComponentFixture<AmountStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
