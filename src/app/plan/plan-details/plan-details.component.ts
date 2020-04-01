import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PlanDetails } from '../planDetails';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.css']
})
export class PlanDetailsComponent implements OnInit {
  form: FormGroup;
  plan = { workName: "Maliny", sector: "EZ", hours: "6:30 - 18:00" }
  @Input() date: Date;
  @Input() isInDashboard: boolean = false; //when this component is in dashboard, the font of form fields should be lower
  constructor(private fb: FormBuilder, private planService: PlanService) { }

  ngOnInit(): void {
    console.log(this.date);
    console.log(this.isInDashboard);
    // this.planService.getPlanDetails(this.userID, this.date).subscribe(x => {
    //   this.plan = x;
    // });
    this.form = this.fb.group({
      workName: this.plan.workName,
      sector: this.plan.sector,
      hours: this.plan.hours,
    });
  }

}
