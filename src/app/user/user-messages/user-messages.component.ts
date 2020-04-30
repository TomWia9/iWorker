import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UserNewMessageDialogComponent } from './user-new-message-dialog/user-new-message-dialog.component';
import { MessagesService } from 'src/app/services/messages.service';
import { AuthService } from 'src/app/services/auth.service';
import { MessageDialogComponent } from 'src/app/shared/messages/message-dialog/message-dialog.component';

@Component({
  selector: 'app-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.css']
})
export class UserMessagesComponent implements OnInit {
  dataSource;
  displayedColumns = ['worker','date'];

  constructor(public dialog: MatDialog, private messagesService: MessagesService, private authService: AuthService) { }

  ngOnInit(): void {
    this.messagesService.getMessageList(this.authService.getCurrentValue().userID, 60).toPromise().then(x => {
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
    const dialogRef = this.dialog.open(UserNewMessageDialogComponent, {
      width: '500px',
   });

   dialogRef.afterClosed().subscribe(() => {
   });
  }

}
