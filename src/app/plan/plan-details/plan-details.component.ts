import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PlanDetails } from '../planDetails';
import { PlanService } from 'src/app/services/plan.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.css']
})
export class PlanDetailsComponent implements OnInit {
  form: FormGroup;
 // plan = { workName: "Maliny", sector: "EZ", hours: "6:30 - 18:00" }
  @Input() date: Date;
  @Input() isInDashboard: boolean = false; //when this component is in dashboard, the font of form fields should be lower
  dateString: string;
  noPlan: boolean = false;
  userID: string;
  constructor(private fb: FormBuilder, private planService: PlanService, private userService: UserService) { }

  ngOnInit(): void {
    this.userID = this.userService.userInfo.userID;
    this.form = this.fb.group({
      workName: '',
      sector: '',
      hours: ''
    });
   console.log(this.date);
     this.planService.getPlanDetails(this.userID, this.date).subscribe(x => {
       if(x == null){
         console.log("null dAta");
         this.noPlan = true;
       } else{
         this.noPlan = false;
        this.form = this.fb.group({
          workName: x.workName,
          sector: x.sector,
          hours: x.hours,
       
    });}
    });
    
  }

}
