import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SetPlanDialogComponent } from './set-plan-dialog/set-plan-dialog.component';
import { Plan } from './plan';
import { User } from '../../shared/user';
import { UsersService } from 'src/app/services/users.service';
import { PlanService } from 'src/app/services/plan.service';
import { DeletePlanDialogComponent } from './delete-plan-dialog/delete-plan-dialog.component';
import { SectorsService } from 'src/app/services/sectors.service';
import { SectorPlan } from './sectorPlan';

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
  plan: Plan = new Plan();
  sectorPlans: SectorPlan[] = [];
  workers: User[] = [];
  wait: boolean = false;

  constructor(private fb: FormBuilder, private sectorsService: SectorsService, private workersService: UsersService, private planService: PlanService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      date: '',
      timeFrom: '',
      timeTo: ''
    });

    this.getSectors();
    

      this.workersService.getWorkersList().subscribe(x => {
        this.workers = x;
      })
  
      this.plan = new Plan();
   
  }

 async getSectors(){
    await this.sectorsService.getSectorsList().toPromise().then(x => {
      x.forEach(element => {
        this.sectorPlans.push({sector: element, workers: []});
      });
    })
  }

  edit(sector){    
    const dialogRef = this.dialog.open(SetPlanDialogComponent, {
      width: '950px',
      data: {sector: sector, workers: this.workers} 
   });

   dialogRef.afterClosed().subscribe(() => {
   });
    
  }

  onSave(){
   
    if(this.dateString.nativeElement.value !== '' && this.workers.length == 0 && this.from.nativeElement.value !== '' && this.to.nativeElement.value !== ''){
     
      this.plan.date = this.dateString.nativeElement.value;
      this.plan.hours = this.from.nativeElement.value + " - " + this.to.nativeElement.value;
      this.plan.sectors = this.sectorPlans; 
      
      this.planService.newPlan(this.plan).subscribe(x => {
        this.success = x;
      })
    } else{
      this.success = false;
    }
  }

  onReset(){
    this.sectorPlans = [];
    this.ngOnInit();
  }

 async likeYesterday(){
    let date = new Date();
    let dateString: string;
    date.setDate(date.getDate() - 1);
    dateString = date.toLocaleDateString();
    await this.planService.getFullPlan(dateString).toPromise().then(x => {  
      if(x !== null){
        this.plan = x;  
        this.sectorPlans.forEach(sector => {
          sector.workers = [];
          this.plan.sectors.forEach(sectorFromAPI => {
            if(sector.sector.sectorName === sectorFromAPI.sector.sectorName){
              sector.workers = sectorFromAPI.workers
            }
          });
        });
        this.plan.date = '';
        this.workers = [];
        this.form = this.fb.group({
          date: '',
          timeFrom: this.plan.hours.substring(0, 5),
          timeTo: this.plan.hours.substring(8,13),
        });
      }   
    })
  }

  onDelete(){
    const dialogRef = this.dialog.open(DeletePlanDialogComponent, {
      width: '500px',      
   });

   dialogRef.afterClosed().subscribe(() => {
   });
  }
}
