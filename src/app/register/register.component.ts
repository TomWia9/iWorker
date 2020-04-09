import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  wrong: boolean = false;


  constructor(private fb: FormBuilder, private userService: UserService) { }

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
      console.log("Zarejestrowano");
      this.userService.register(value).subscribe(() => {
        this.wrong = false;
      });
    } else{
      console.log("Nie zarejestrowano");
      this.wrong = true;
    }
  }

}
