import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-message-to-all-dialog',
  templateUrl: './new-message-to-all-dialog.component.html',
  styleUrls: ['./new-message-to-all-dialog.component.css']
})
export class NewMessageToAllDialogComponent implements OnInit {
  form: FormGroup;
  error: boolean = false;

  constructor(public dialogRef: MatDialogRef<NewMessageToAllDialogComponent>, private fb: FormBuilder, private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      message: ''
    });
  }

  onSend(value){
    if(value !== ''){
      console.log("Wysłano: " + value);
      this.messagesService.sendToAll(value).subscribe(x => {
        this.error = x;
      })
      //serwis -> send
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
