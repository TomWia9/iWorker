import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  wrong: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: '',
      password: ''
    });
  }

  onSubmit(value){
    if(value.login != '' && value.password != ''){
      console.log("Zalogowano");
      this.loginService.login(value).subscribe(x => {
        if(x){
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
