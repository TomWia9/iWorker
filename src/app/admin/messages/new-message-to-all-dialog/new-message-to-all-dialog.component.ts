import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-message-to-all-dialog',
  templateUrl: './new-message-to-all-dialog.component.html',
  styleUrls: ['./new-message-to-all-dialog.component.css']
})
export class NewMessageToAllDialogComponent implements OnInit {
  form: FormGroup;
  error: boolean = false;

  constructor(public dialogRef: MatDialogRef<NewMessageToAllDialogComponent>, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      message: ''
    });
  }

  onSend(value){
    if(value !== ''){
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
}
