import { Component, OnInit } from '@angular/core';
import { RaportDetails } from './raportDetails';
import { ActivatedRoute } from '@angular/router';
import { RaportService } from 'src/app/services/raport.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-raport-details',
  templateUrl: './raport-details.component.html',
  styleUrls: ['./raport-details.component.css']
})
export class RaportDetailsComponent implements OnInit {
  form: FormGroup;
  id: number;
  userID: string;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private raportService: RaportService, private authService: AuthService) { } 

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
      chests: '',
    });

    this.id = this.route.snapshot.params.id;
    this.raportService.getDetails(this.userID, this.id).subscribe(x => {
      this.form = this.fb.group({
        userID: x.userID,
        name: x.name,
        surname: x.surname,
        workName: x.workName,
        sector: x.sector,
        amount:x.amount,
        hours: x.hours,
        date: x.date,
        chests: x.chests,
      });
    })
  }

}
