import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-message-dialog',
  templateUrl: './new-message-dialog.component.html',
  styleUrls: ['./new-message-dialog.component.css']
})
export class NewMessageDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewMessageDialogComponent>, private fb: FormBuilder) { }


  ngOnInit(): void {
  }

}
