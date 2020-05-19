import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { Login } from 'src/app/login/login';
import { MatDialogRef } from '@angular/material/dialog';
import { NewPassword } from './newPassword';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.css']
})
export class SettingsDialogComponent implements OnInit {
  form: FormGroup;
  show: boolean = false;
  error: boolean = false;
  wrongCurrentPassword = false;
  newPassword: NewPassword = new NewPassword();

  constructor(public dialogRef: MatDialogRef<SettingsDialogComponent>, private fb: FormBuilder, private authService: AuthService, private workersService: UsersService) { }

  ngOnInit(): void {
   
    this.newPassword.userID = this.authService.getCurrentValue().userID;
    this.newPassword.name = this.authService.getCurrentValue().name;
    this.newPassword.surname = this.authService.getCurrentValue().surname;

    this.form = this.fb.group({
      currentPassword: '',
      newPassword1: '',
      newPassword2: ''
    })
  }

  onCurrentPassword(value){
    const LoginData: Login = {
      userID: this.newPassword.userID,
      password: value
    };
  
    this.authService.login(LoginData).subscribe(x => {
      if(x){
        this.show = true;
        this.wrongCurrentPassword = false;
      } 
      else{
        this.wrongCurrentPassword = true;
      }
    })
  }

  onPasswordChange(value){
    if(value.newPassword1 !== value.newPassword2 || value.newPassword1 === '' || value.newPassword2 === ''){
      this.error = true;
    } else{

      this.newPassword.password = value.newPassword1;      

      this.workersService.changePassword(this.newPassword).subscribe(x => {
        this.error = x; //true or false
        if(this.error == false){
          this.dialogRef.close();
        }
      })

    } 
       
  
    }
  }
