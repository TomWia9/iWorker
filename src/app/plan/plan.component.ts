import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Plan } from './plan';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
 
  date: Date;
  isDateEntered = false;
  @ViewChild('dateInput', {static: true}) dateInput: ElementRef;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
   
  }

  showPlan(){
    this.isDateEntered = true;
    this.date = this.dateInput.nativeElement.value;
  }

}
