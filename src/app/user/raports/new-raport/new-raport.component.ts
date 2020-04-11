import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RaportService } from 'src/app/services/raport.service';
import { RaportDetails } from '../raport-details/raportDetails';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-new-raport',
  templateUrl: './new-raport.component.html',
  styleUrls: ['./new-raport.component.css']
})
export class NewRaportComponent implements OnInit {
  form: FormGroup;
  works: string[] = ['Maliny', 'Truskawki', 'Jerzyny', 'Borówki'];
  sectors: string[] = ['A1', 'B12', 'EZ', 'ES', 'C3'];
  chests: string[] = ['8x250', '16x250', '8x500', '10x200', '20x100'];
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
              this.router.navigate(['/raport',x]);
          })
      
      } else{
        this.cantAdd = true;
      };
  }
  
}

