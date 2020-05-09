import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlanService } from 'src/app/services/plan.service';
import { MatTableDataSource } from '@angular/material/table';
import { PlanDate } from '../planDate';

@Component({
  selector: 'app-delete-plan-dialog',
  templateUrl: './delete-plan-dialog.component.html',
  styleUrls: ['./delete-plan-dialog.component.css']
})
export class DeletePlanDialogComponent implements OnInit {
  dataSource;
  error: boolean = false;
  displayedColumns = ['index', 'date'];
  planDates: PlanDate[] = [];

  constructor(public dialogRef: MatDialogRef<DeletePlanDialogComponent>, private planService: PlanService) {}

  ngOnInit(): void {
    this.planService.getListOfPlanDates().subscribe(x => {
      this.planDates = x;
      this.dataSource = new MatTableDataSource(this.planDates);
    })
  }

  onDelete(row){    
    this.planService.deletePlan(row.date).subscribe(x =>{
      this.error = x;
      if(!this.error){
        const index = this.planDates.findIndex(y => y.date == row.date);
         this.planDates.splice(index, 1);
         this.dataSource = new MatTableDataSource(this.planDates);
      }
    })
  }

}
