import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageItem } from 'src/app/shared/messageItem';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-user-message-dialog',
  templateUrl: './user-message-dialog.component.html',
  styleUrls: ['./user-message-dialog.component.css']
})
export class UserMessageDialogComponent implements OnInit {
  message: MessageItem = new MessageItem();

  constructor(public dialogRef: MatDialogRef<UserMessageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.messagesService.getMessage(this.data.id).subscribe(x => {
      this.message = x;
    })
  }

}
