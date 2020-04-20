import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-message-to-all-dialog',
  templateUrl: './new-message-to-all-dialog.component.html',
  styleUrls: ['./new-message-to-all-dialog.component.css']
})
export class NewMessageToAllDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewMessageToAllDialogComponent>, private fb: FormBuilder) { }


  ngOnInit(): void {
  }

}
