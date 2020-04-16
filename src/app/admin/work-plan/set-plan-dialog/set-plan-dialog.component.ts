import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkersList } from '../../workers/workers-list/workers-list';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-set-plan-dialog',
  templateUrl: './set-plan-dialog.component.html',
  styleUrls: ['./set-plan-dialog.component.css']
})
export class SetPlanDialogComponent implements OnInit {
  form: FormGroup;
  showButton: boolean = false;
  dataList: WorkersList[] = [];
  dataSource;
  displayedColumns = ['userID','name', 'surname'];;

  constructor(
    public dialogRef: MatDialogRef<SetPlanDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {}

  ngOnInit(): void {

    this.form = this.fb.group({
      worker: ''
    })

    switch(this.data.sectorName){
      case 'A1': {
        this.dataList = this.data.plan.A1;
        break;
      }
      case 'B12': {
        this.dataList = this.data.plan.B12;
        break;
      }
      case 'EZ': {
        this.dataList = this.data.plan.EZ;
        break;
      }
      case 'ES': {
        this.dataList = this.data.plan.ES;
        break;
      }
      case 'C3': {
        this.dataList = this.data.plan.C3;
        break;
      }
      case 'H12': {
        this.dataList = this.data.plan.H12;
        break;
      }
    }

    this.dataSource = new MatTableDataSource(this.dataList);
  }

  onExit(){
    this.dialogRef.close();
  }

  onChange(){
    this.showButton = true;
  }

  onAdd(value){
   
      this.dataList.push(value.worker);
      this.dataSource = new MatTableDataSource(this.dataList);
      const index = this.data.workers.findIndex(x => x.userID == value.worker.userID);
      this.data.workers.splice(index, 1);
    
    this.showButton = false;
   
  }

  onDelete(row: WorkersList){    
    this.data.workers.push(row);
    const index = this.dataList.findIndex(x => x.userID == row.userID);
    this.dataList.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataList);
    this.form = this.fb.group({
      worker: ''
    })

  }

  // onConfirm(){
  //   console.log("Zatwierdzam");
    
  //   switch(this.data.sectorName){
  //     case 'A1': {
  //       this.data.plan.A1 = this.dataList;
  //       break;
  //     }
  //     case 'B12': {
  //       this.data.plan.B12 = this.dataList;
  //       break;
  //     }
  //     case 'EZ': {
  //       this.data.plan.EZ = this.dataList;
  //       break;
  //     }
  //     case 'ES': {
  //       this.data.plan.ES = this.dataList;
  //       break;
  //     }
  //     case 'C3': {
  //       this.data.plan.C3 = this.dataList;
  //       break;
  //     }
  //     case 'H12': {
  //       this.data.plan.H12 = this.dataList;
  //       break;
  //     }
  //   }
  // }


}
