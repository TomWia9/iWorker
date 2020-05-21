import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReportService } from 'src/app/services/report.service';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/user';
import { AuthService } from 'src/app/services/auth.service';
import { SectorsService } from 'src/app/services/sectors.service';
import { Sector } from 'src/app/shared/sector';
import { ReportDetails } from './reportDetails';

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
  success: boolean = null;
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
    if (value.userID != '' && value.name !== '' && value.surname !== '' && value.date !== '' && value.hours !== '' && value.hours <13
        && value.sector !== '' && value.amount !== ''){
          const newReport = value as ReportDetails;
          newReport.date = this.date;          
          
          this.reportService.createReport(newReport).subscribe(x=> {
            if(x != -1){
              this.success = true;
            }
            else{
              this.success = false;
            }
              
          })
      
      } else{
        this.success = false;
      };
  }

 
}

