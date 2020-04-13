import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})
export class RegisterDialogComponent implements OnInit {
  form: FormGroup;
  wrong: boolean = null;

  constructor(private fb: FormBuilder, private registerService: RegisterService, public dialogRef: MatDialogRef<RegisterDialogComponent>) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      userID: '',
      name: '',
      surname: '',
      password: ''
    });
  }

  onSubmit(value){
    if(value.userID != '' && value.name != '' && value.surname != '' && value.password != ''){
      this.registerService.register(value).subscribe(x => {
        this.wrong = x;
      });
    } else{
      this.wrong = true;
    }

    this.ngOnInit(); //to clear form
     
  }

  onExit(){
    this.dialogRef.close();
  }
}
