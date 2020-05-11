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

  async onDelete(value){
    if(value.worker != ''){
      await this.workersService.deleteWorker(value.worker.userID).toPromise().then(x => {
        this.deleted = x; //true or false
      })
    } else{
      this.deleted = false;
    }

    if(this.deleted){
      this.dialogRef.close();  
    }
   
    
    
   
  }

}
