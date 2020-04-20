import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-new-message-dialog',
  templateUrl: './user-new-message-dialog.component.html',
  styleUrls: ['./user-new-message-dialog.component.css']
})
export class UserNewMessageDialogComponent implements OnInit {

  form: FormGroup;
  error: boolean = false;

  constructor(public dialogRef: MatDialogRef<UserNewMessageDialogComponent>, private fb: FormBuilder) { }


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
