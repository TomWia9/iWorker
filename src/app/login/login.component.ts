import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  wrong: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.logout();
    this.form = this.fb.group({
      userID: '',
      password: ''
    });
  }

  onSubmit(value){
    if(value.userID !== '' && value.password !== ''){
      this.authService.login(value).subscribe(x => {                
        if(x){
          if(this.authService.getCurrentValue().userID === 0){         
            this.router.navigate(['/admin']);
          } else if(this.authService.getCurrentValue().userID !== null && this.authService.getCurrentValue().userID !== 0){
            this.router.navigate(['']);
          }
        }
         else {
          this.wrong = true;
        }
      });
    } else{
      this.wrong = true;
    }
  }

}
