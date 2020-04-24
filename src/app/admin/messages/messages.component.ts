import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { NewMessageDialogComponent } from './new-message-dialog/new-message-dialog.component';
import { NewMessageToAllDialogComponent } from './new-message-to-all-dialog/new-message-to-all-dialog.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { MessageList } from 'src/app/shared/messagesList';
import { MessagesService } from 'src/app/services/messages.service';

// const MESSAGES = [  //it will be replaced with data from api
//   {worker: {userID: 158, name: "Tomasz",surname: "Wiatrowski"}, date: "19.04.2020 | 18:30"},
//   {worker: {userID: 168, name: "Karolina", surname: "Chruścińska"}, date: "19.04.2020 | 18:30"},
// ] 

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: MessageList[] = [
    {messageID: 1, worker: {userID: 158, name: "Tomasz",surname: "Wiatrowski"}, date: "19.04.2020 | 18:30"},
    {messageID: 2, worker: {userID: 168, name: "Karolina", surname: "Chruścińska"}, date: "20.04.2020 | 19:30"}
  ]
  dataSource;
  displayedColumns = ['worker','date'];

  constructor(public dialog: MatDialog, private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.messagesService.getMessageList(0).subscribe(x => {
      this.messages = x;
    })
    this.dataSource = new MatTableDataSource(this.messages);
  }

  message(row: any){
    console.log(row.messageID);
    
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '500px',
      data: {worker: row.messageID}
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

