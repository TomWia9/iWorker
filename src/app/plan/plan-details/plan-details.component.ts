import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Plan } from '../plan';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.css']
})
export class PlanDetailsComponent implements OnInit {
  form: FormGroup;
  plan: Plan = { workName: "Maliny", sector: "EZ", hours: "6:30 - 18:00" }
  @Input() date: Date;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.date);
    this.form = this.fb.group({
      workName: this.plan.workName,
      sector: this.plan.sector,
      hours: this.plan.hours,
    });
  }

}
