import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaportDetailsComponent } from './raport-details.component';

describe('RaportDetailsComponent', () => {
  let component: RaportDetailsComponent;
  let fixture: ComponentFixture<RaportDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaportDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaportDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
