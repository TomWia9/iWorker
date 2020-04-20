import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WorkersService } from 'src/app/services/workers.service';
import { WorkersList } from '../../workers/workers-list/workers-list';

@Component({
  selector: 'app-new-message-dialog',
  templateUrl: './new-message-dialog.component.html',
  styleUrls: ['./new-message-dialog.component.css']
})
export class NewMessageDialogComponent implements OnInit {

  form: FormGroup;
  workers: WorkersList[];
  selected: boolean = false;
  error: boolean = false;

  constructor(public dialogRef: MatDialogRef<NewMessageDialogComponent>, private fb: FormBuilder, private workersService: WorkersService) { }


  ngOnInit(): void {

    this.workersService.getWorkersList().subscribe(x => {
      this.workers = x;
    })

    this.form = this.fb.group({
      message: '',
      worker: ''
    });
  }

  onSend(value){
    if(value !== '' && this.selected === true){
      console.log(value);
      //serwis -> send
      this.dialogRef.close();
    }
    
    else{
      this.error = true;
    }
    
  }

  onExit(){
    this.dialogRef.close();
  }

  onChange(){
    this.selected = true;
  }


}
