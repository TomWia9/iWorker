import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { WorkersService } from 'src/app/services/workers.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WorkersList } from '../workers-list/workers-list';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  form: FormGroup;
  workers: WorkersList[];
  selected: boolean = false;
  success: boolean = null;
  newData: WorkersList = new WorkersList();
  constructor(public dialogRef: MatDialogRef<EditDialogComponent>, private workersService: WorkersService, private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.form = this.fb.group({
      worker: '',
      userID: '',
      name: '',
      surname: ''
    })
   
    this.workersService.getWorkersList().subscribe(x => {
      this.workers = x;
    })
   
  }

  onSelectChange(event){    
    console.log(event.value.userID);
    this.selected = true;
  }

  onEdit(value){
    
    this.newData.userID = value.userID;
    this.newData.name = value.name;
    this.newData.surname = value.surname;
    
    if(value.worker != ''){
    this.workersService.editWorker(value.worker.userID, this.newData).subscribe(x => {
      this.success = x; //true or false
      this.dialogRef.close();
    })
  } else{
    this.success = false;
  }

    if(this.success){
      this.dialogRef.close();  
    }
  }

  onExit(){
    this.dialogRef.close();   
  }
}
