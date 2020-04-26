import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MessageItem } from 'src/app/shared/messageItem';
import { MessagesService } from 'src/app/services/messages.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-new-message-dialog',
  templateUrl: './user-new-message-dialog.component.html',
  styleUrls: ['./user-new-message-dialog.component.css']
})
export class UserNewMessageDialogComponent implements OnInit {
  message: MessageItem = new MessageItem();
  form: FormGroup;
  error: boolean = false;

  constructor(public dialogRef: MatDialogRef<UserNewMessageDialogComponent>, private fb: FormBuilder, 
              private messagesService: MessagesService, private authService: AuthService) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      message: ''
    });
  }

  onSend(value){
    if(value !== ''){
      console.log("Wysłano do " + 0 + ", wiadomość: " + value);
      this.message.message = value;
      this.messagesService.sendToUser(this.message, this.authService.getCurrentValue().userID, 0).subscribe(x => {
        this.error = x;
      })
      if(!this.error){
        this.dialogRef.close();
      }
    
    }
    
    else{
      this.error = true;
    }
    
  }

  onExit(){
    this.dialogRef.close();
  }

}
