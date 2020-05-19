import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReportService } from 'src/app/services/report.service';
import { ReportDetails } from '../report-details/reportDetails';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/user';
import { AuthService } from 'src/app/services/auth.service';
import { SectorsService } from 'src/app/services/sectors.service';
import { Sector } from 'src/app/shared/sector';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent implements OnInit {
  form: FormGroup;
  sectors: Sector[];
  @ViewChild('dateString', {static: true}) dateString: ElementRef;
  date: Date;
  cantAdd: boolean = false;
  userInfo: User;

  constructor(private fb: FormBuilder, private sectorsService: SectorsService, private reportService: ReportService, private authService: AuthService, private router: Router) { }

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
          const newReport = value as ReportDetails; 
          newReport.date = this.date;
          console.log(newReport);
          
          
          this.reportService.createReport(newReport).subscribe(x=> {
            if(x != -1){
              this.router.navigate(['/report',x]);
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

