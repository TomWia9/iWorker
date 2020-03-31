import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursStatisticsComponent } from './hours-statistics.component';

describe('HoursStatisticsComponent', () => {
  let component: HoursStatisticsComponent;
  let fixture: ComponentFixture<HoursStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
