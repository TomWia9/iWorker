import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrls: ['./report-dialog.component.css']
})
export class ReportDialogComponent implements OnInit {
  form: FormGroup;
  date: Date;

  constructor(
    public dialogRef: MatDialogRef<ReportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private reportService: ReportService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      userID: '',
      name: '',
      surname: '',
      workName: '',
      sector: '',
      amount: '',
      hours: '',
      date: '',
      chests: '',
    });
    
    this.reportService.getDetails(this.data.userID, this.data.reportID).subscribe(x => {
      this.form = this.fb.group({
        userID: x.userID,
        name: x.name,
        surname: x.surname,
        workName: x.sector.workName,
        sector: x.sector.sectorName,
        amount:x.amount,
        hours: x.hours,
        date: x.date,
      });

      this.date = x.date;

    })
  }

}
