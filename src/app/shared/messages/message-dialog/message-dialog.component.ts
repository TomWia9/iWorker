import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { MessagesService } from 'src/app/services/messages.service';
import { MessageItem } from 'src/app/shared/messages/messageItem';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent implements OnInit {
  message: MessageItem = new MessageItem();

  constructor(public dialogRef: MatDialogRef<MessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private messagesService: MessagesService) { }

  ngOnInit(): void { 
    this.messagesService.getMessage(this.data.id).subscribe(x => {
      this.message = x;
    })
   
    
  }

}
