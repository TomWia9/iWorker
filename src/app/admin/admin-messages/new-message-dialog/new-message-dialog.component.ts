import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WorkersService } from 'src/app/services/workers.service';
import { MessagesService } from 'src/app/services/messages.service';
import { MessageItem } from 'src/app/shared/messageItem';
import { WorkersList } from 'src/app/admin/workers/workers-list/workers-list';

@Component({
  selector: 'app-new-message-dialog',
  templateUrl: './new-message-dialog.component.html',
  styleUrls: ['./new-message-dialog.component.css']
})
export class NewMessageDialogComponent implements OnInit {
  message: MessageItem = new MessageItem();
  form: FormGroup;
  workers: WorkersList[];
  selected: boolean = false;
  error: boolean = false;

  constructor(public dialogRef: MatDialogRef<NewMessageDialogComponent>, private fb: FormBuilder, private workersService: WorkersService, private messagesService: MessagesService) { }


  ngOnInit(): void {

    this.workersService.getWorkersList().subscribe(x => {
      this.workers = x;
    })

    this.form = this.fb.group({
      message: '',
      worker: ''
    });
  }

  onSend(value, worker){
    if(value !== '' && this.selected === true){
      this.message.message = value;
      this.messagesService.sendToUser(this.message, 0, worker).subscribe(x => {
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

  onChange(){
    this.selected = true;
  }


}
