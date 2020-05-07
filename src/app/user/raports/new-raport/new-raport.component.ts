import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RaportService } from 'src/app/services/raport.service';
import { RaportDetails } from '../raport-details/raportDetails';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/user';
import { AuthService } from 'src/app/services/auth.service';
import { SECTORS } from 'src/app/shared/sectors';
import { CHESTS } from 'src/app/shared/chests';
import { WORKS } from 'src/app/shared/works';

@Component({
  selector: 'app-new-raport',
  templateUrl: './new-raport.component.html',
  styleUrls: ['./new-raport.component.css']
})
export class NewRaportComponent implements OnInit {
  form: FormGroup;
  works = WORKS;
  sectors = SECTORS;
  chests = CHESTS;
  @ViewChild('dateString', {static: true}) dateString: ElementRef;
  date: Date;
  cantAdd: boolean = false;
  userInfo: User;

  constructor(private fb: FormBuilder, private raportService: RaportService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userInfo = this.authService.getCurrentValue();
    this.form = this.fb.group({
      userID: this.userInfo.userID,
      name: this.userInfo.name,
      surname: this.userInfo.surname,
      workName: '',
      sector: '',
      amount: '',
      hours: '',
      date: '',
      chests: '',
    });
  }

  onSubmit(value){
   this.date = this.dateString.nativeElement.value;
   console.log(this.date);
    if (value.userID != '' && value.name !== '' && value.surname !== '' && value.date !== '' && value.hours !== '' && value.hours <13 && value.workName !== '' 
        && value.sector !== '' && value.amount !== '' && value.chests !== ''){
          this.cantAdd = false;
          const newRaport = value as RaportDetails; 
          newRaport.date = this.date;
          
          this.raportService.createRaport(newRaport).subscribe(x=> {
            if(x != -1){
              this.router.navigate(['/raport',x]);
            }
            else{
              this.cantAdd = true;
            }
              
          })
      
      } else{
        this.cantAdd = true;
      };
  }
  
}

