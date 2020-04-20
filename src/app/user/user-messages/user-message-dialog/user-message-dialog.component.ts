import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-message-dialog',
  templateUrl: './user-message-dialog.component.html',
  styleUrls: ['./user-message-dialog.component.css']
})
export class UserMessageDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserMessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.data.date);
    
  }

}
