import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Plan } from './plan';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  form: FormGroup;
  plan: Plan = { workName: "Maliny", sector: "EZ", hours: "6:30 - 18:00" }
  isDateEntered = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      date: '',
      workName: this.plan.workName,
      sector: this.plan.sector,
      hours: this.plan.hours,
    });
  }

  showPlan(){
    this.isDateEntered = true;
  }

}
