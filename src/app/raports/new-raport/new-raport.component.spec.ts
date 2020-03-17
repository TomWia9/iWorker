import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRaportComponent } from './new-raport.component';

describe('NewRaportComponent', () => {
  let component: NewRaportComponent;
  let fixture: ComponentFixture<NewRaportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRaportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRaportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
