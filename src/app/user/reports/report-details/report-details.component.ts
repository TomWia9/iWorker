import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from 'src/app/services/report.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.css']
})
export class ReportDetailsComponent implements OnInit {
  form: FormGroup;
  id: number;
  userID: number;
  date: Date;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private reportService: ReportService, private authService: AuthService) { } 

  ngOnInit(): void {
    this.userID = this.authService.getCurrentValue().userID;
    this.form = this.fb.group({
      userID: '',
      name: '',
      surname: '',
      workName: '',
      sector: '',
      amount: '',
      hours: '',
      date: '',
    });

    this.id = this.route.snapshot.params.id;
    this.reportService.getDetails(this.userID, this.id).subscribe(x => {
      this.form = this.fb.group({
        userID: x.userID,
        name: x.name,
        surname: x.surname,
        sector: x.sector.sectorName,
        workName: x.sector.workName,
        amount: x.amount,
        hours: x.hours,
        date: x.date,
      });

      this.date = x.date;

    })
  }

}
