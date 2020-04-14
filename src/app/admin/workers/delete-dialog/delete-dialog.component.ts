import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { WorkersList } from '../workers-list/workers-list';
import { WorkersService } from 'src/app/services/workers.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {
  form: FormGroup;
  workers: WorkersList[];
  deleted: boolean = null;
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>, private workersService: WorkersService, private fb: FormBuilder) { }
  

  ngOnInit(): void {
    this.form = this.fb.group({
      worker: ''
    })
    this.workersService.getWorkersList().subscribe(x => {
      this.workers = x;
    })
  }

  onExit(){
    this.dialogRef.close();   
  }

  onDelete(value){
    if(value.worker != ''){
      this.workersService.deleteWorker(value.worker.userID).subscribe(x => {
        this.deleted = x; //true or false
        this.dialogRef.close();  
      })
    } else{
      this.deleted = false;
    }

    if(this.deleted){
      this.dialogRef.close();  
    }
   
    
    
   
  }

}
