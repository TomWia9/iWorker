import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UserMessageDialogComponent } from './user-message-dialog/user-message-dialog.component';
import { UserNewMessageDialogComponent } from './user-new-message-dialog/user-new-message-dialog.component';

const MESSAGES = [  //it will be replaced with data from api
  {date: "19.04.2020 | 18:30"},
  {date: "19.04.2020 | 18:30"},
] 

@Component({
  selector: 'app-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.css']
})
export class UserMessagesComponent implements OnInit {
  dataSource;
  displayedColumns = ['date'];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(MESSAGES);
  }

  message(row: any){
    console.log(row.date);
    
    const dialogRef = this.dialog.open(UserMessageDialogComponent, {
      width: '500px',
      data: {worker: row.date}
   });

   dialogRef.afterClosed().subscribe(() => {
   });
  }

  newMessage(){
    const dialogRef = this.dialog.open(UserNewMessageDialogComponent, {
      width: '500px',
   });

   dialogRef.afterClosed().subscribe(() => {
   });
  }

}
