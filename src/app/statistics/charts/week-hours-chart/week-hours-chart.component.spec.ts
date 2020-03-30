import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekHoursChartComponent } from './week-hours-chart.component';

describe('WeekHoursChartComponent', () => {
  let component: WeekHoursChartComponent;
  let fixture: ComponentFixture<WeekHoursChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekHoursChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekHoursChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
