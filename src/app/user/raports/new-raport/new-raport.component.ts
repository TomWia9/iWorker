import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RaportService } from 'src/app/services/raport.service';
import { RaportDetails } from '../raport-details/raportDetails';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/user';
import { AuthService } from 'src/app/services/auth.service';
import { SectorsService } from 'src/app/services/sectors.service';
import { Sector } from 'src/app/admin/sectors/sector';

@Component({
  selector: 'app-new-raport',
  templateUrl: './new-raport.component.html',
  styleUrls: ['./new-raport.component.css']
})
export class NewRaportComponent implements OnInit {
  form: FormGroup;
  sectors: Sector[];
  @ViewChild('dateString', {static: true}) dateString: ElementRef;
  date: Date;
  cantAdd: boolean = false;
  userInfo: User;

  constructor(private fb: FormBuilder, private sectorsService: SectorsService, private raportService: RaportService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.sectorsService.getSectorsList().subscribe(x =>{
      this.sectors = x;
    })

    this.userInfo = this.authService.getCurrentValue();
    this.form = this.fb.group({
      userID: this.userInfo.userID,
      name: this.userInfo.name,
      surname: this.userInfo.surname,
      sector: '',
      amount: '',
      hours: '',
      date: '',
    });
  }

  onSubmit(value){
   this.date = this.dateString.nativeElement.value;
   console.log(this.date);
    if (value.userID != '' && value.name !== '' && value.surname !== '' && value.date !== '' && value.hours !== '' && value.hours <13
        && value.sector !== '' && value.amount !== ''){
          this.cantAdd = false;
          const newRaport = value as RaportDetails; 
          newRaport.date = this.date;
          console.log(newRaport);
          
          
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

