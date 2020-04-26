import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { NewMessageDialogComponent } from './new-message-dialog/new-message-dialog.component';
import { NewMessageToAllDialogComponent } from './new-message-to-all-dialog/new-message-to-all-dialog.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  dataSource;
  displayedColumns = ['worker','date'];

  constructor(public dialog: MatDialog, private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.messagesService.getMessageList(0).toPromise().then(x => {
    this.dataSource = new MatTableDataSource(x);
  })
  }

  message(row: any){    
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '500px',
      data: {id: row.messageID}
   });

   dialogRef.afterClosed().subscribe(() => {
   });
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

