import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../shared/user';
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
  dataList: User[] = [];
  dataSource;
  displayedColumns = ['userID','name', 'surname'];;

  constructor(
    public dialogRef: MatDialogRef<SetPlanDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      worker: ''
    })

    this.dataList = this.data.sector.workers;
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

  onDelete(row: User){    
    this.data.workers.push(row);
    const index = this.dataList.findIndex(x => x.userID == row.userID);
    this.dataList.splice(index, 1);
    this.dataSource = new MatTableDataSource(this.dataList);
    this.form = this.fb.group({
      worker: ''
    })

  }
}
