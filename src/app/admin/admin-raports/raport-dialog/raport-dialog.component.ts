import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RaportService } from 'src/app/services/raport.service';

@Component({
  selector: 'app-raport-dialog',
  templateUrl: './raport-dialog.component.html',
  styleUrls: ['./raport-dialog.component.css']
})
export class RaportDialogComponent implements OnInit {
  form: FormGroup;
  date: Date;

  constructor(
    public dialogRef: MatDialogRef<RaportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private raportService: RaportService) {}

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
    
    this.raportService.getDetails(this.data.userID, this.data.raportID).subscribe(x => {
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
