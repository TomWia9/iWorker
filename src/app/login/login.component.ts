import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  wrong: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      userID: '',
      password: ''
    });
  }

  onSubmit(value){
    if(value.userID != '' && value.password != ''){
      console.log("Zalogowano");
      this.userService.login(value).subscribe(x => {
        if(x){
          this.userService.setUser(x);
          this.router.navigate(['']);
        } else{
          this.wrong = true;
        }
      });
    } else{
      console.log("Nie zalogowano");
      this.wrong = true;
    }
  }

}
