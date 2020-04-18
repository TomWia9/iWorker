import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SECTORS } from 'src/app/shared/sectors';
import { MatDialog } from '@angular/material/dialog';
import { SetPlanDialogComponent } from './set-plan-dialog/set-plan-dialog.component';
import { Plan } from './plan';
import { WorkersList } from '../workers/workers-list/workers-list';
import { WorkersService } from 'src/app/services/workers.service';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-work-plan',
  templateUrl: './work-plan.component.html',
  styleUrls: ['./work-plan.component.css']
})
export class WorkPlanComponent implements OnInit {
  success: boolean = null;
  @ViewChild('dateString', {static: true}) dateString: ElementRef;
  @ViewChild('from', {static: true}) from: ElementRef;
  @ViewChild('to', {static: true}) to: ElementRef;
  form: FormGroup;
  sectors = SECTORS;
  plan: Plan;
  workers: WorkersList[] = [];

  constructor(private fb: FormBuilder, private workersService: WorkersService, private planService: PlanService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      date: '',
      timeFrom: '',
      timeTo: ''
    });

    this.workersService.getWorkersList().subscribe(x => {
      this.workers = x;
    })

    this.plan = new Plan();
  }

  edit(sector){
    const dialogRef = this.dialog.open(SetPlanDialogComponent, {
      width: '950px',
      data: {sectorName: sector, plan: this.plan, workers: this.workers}
      
      
   });

   dialogRef.afterClosed().subscribe(() => {
   });
    
  }

  onSave(){
   
    if(this.dateString.nativeElement.value !== '' && this.workers.length == 0 && this.from.nativeElement.value !== '' && this.to.nativeElement.value !== ''){
      this.plan.date = this.dateString.nativeElement.value;
      this.plan.hours = this.from.nativeElement.value + " - " + this.to.nativeElement.value;
      this.planService.newPlan(this.plan).subscribe(x => {
        this.success = x;
      })
    } else{
      this.success = false;
    }
  }

  onReset(){
    this.ngOnInit();
  }

 async likeYesterday(){
    let date = new Date();
    let dateString: string;
    date.setDate(date.getDate() - 1);
    dateString = date.toLocaleDateString();
    await this.planService.getFullPlan(dateString).toPromise().then(x => {
      this.plan = x;      
    })

    this.plan.date = '';
    this.workers = [];
    this.form = this.fb.group({
      date: '',
      timeFrom: this.plan.hours.substring(0, 5),
      timeTo: this.plan.hours.substring(8,13),
    });
    
  }
}
