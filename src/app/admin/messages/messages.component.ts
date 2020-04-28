import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { NewMessageDialogComponent } from './new-message-dialog/new-message-dialog.component';
import { NewMessageToAllDialogComponent } from './new-message-to-all-dialog/new-message-to-all-dialog.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  newMessage(){
    const dialogRef = this.dialog.open(NewMessageDialogComponent, {
      width: '500px',
   });

   dialogRef.afterClosed().subscribe(() => {
   });
  }

  newMessageToAll(){
    const dialogRef = this.dialog.open(NewMessageToAllDialogComponent, {
      width: '500px', 
      
   });

   dialogRef.afterClosed().subscribe(() => {
   });
  }

}

