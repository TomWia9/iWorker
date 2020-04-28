import { Component, OnInit, Input } from '@angular/core';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { MessagesService } from 'src/app/services/messages.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  dataSource;
  displayedColumns = ['worker','date'];
  @Input() isInDashboard: boolean = true; //if component isn't in dashboard, then height should be auto

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

}
