import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../../shared/user';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  form: FormGroup;
  workers: User[];
  selected: boolean = false;
  edited: boolean = null;
  newData: User = new User();
  constructor(public dialogRef: MatDialogRef<EditDialogComponent>, private workersService: UsersService, private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.form = this.fb.group({
      worker: '',
      userID: '',
      name: '',
      surname: ''
    })
   
    this.workersService.getWorkersList().subscribe(x => {
      this.workers = x;
    })
   
  }

  onSelectChange(event){    
    console.log(event.value.userID);
    this.selected = true;
  }

  async onEdit(value){
   
    if(value.worker != '' && value.userID != '' && value.name != '' && value.surname != ''){
      this.newData.userID = value.userID;
      this.newData.name = value.name;
      this.newData.surname = value.surname;
      console.log(this.newData);
      
      await this.workersService.editWorker(value.worker.userID, this.newData).toPromise().then(x => {
      this.edited = x; //true or false
    })
  } else{
    this.edited = false;
  }

    if(this.edited){
      this.dialogRef.close();  
    }
  }

  onExit(){
    this.dialogRef.close();   
  }
}
