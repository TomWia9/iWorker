import { Component, OnInit, Input } from '@angular/core';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MessagesService } from 'src/app/services/messages.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  dataSource;
  displayedColumns = ['worker','date'];
  @Input() isInDashboard: boolean = true; //if component isn't in dashboard, then max-height should be 500px
  @Input() peroid: number = 1;

  constructor(public dialog: MatDialog, private messagesService: MessagesService, private authService: AuthService) { }

  ngOnInit(): void {
    this.messagesService.getMessageList(this.authService.getCurrentValue().userID, this.peroid).toPromise().then(x => {
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

}
