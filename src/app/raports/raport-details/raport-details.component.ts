import { Component, OnInit } from '@angular/core';
import { RaportDetails } from './raportDetails';
import { ActivatedRoute } from '@angular/router';
import { RaportService } from 'src/app/services/raport.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-raport-details',
  templateUrl: './raport-details.component.html',
  styleUrls: ['./raport-details.component.css']
})
export class RaportDetailsComponent implements OnInit {
  form: FormGroup;
  raport: RaportDetails = new RaportDetails();
  id: number;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private raportService: RaportService) { } 

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    // this.raportService.getDetails(this.userID, this.id).subscribe(x => {
    //   this.raport = x;
    // })

    this.raport.userID = "Mock id"
    this.raport.name = 'Mock name',
    this.raport.surname = 'Mock surname',
    this.raport.workName = 'Mock workName',
    this.raport.sector = 'Mock sector',
    this.raport.amount = 'Mock amount',
    this.raport.hours = 'Mock horus',
    this.raport.date = new Date(),
    this.raport.chests = 'Mock chests',

    this.form = this.fb.group({
      userID: this.raport.userID,
      name: this.raport.name,
      surname: this.raport.surname,
      workName: this.raport.workName,
      sector: this.raport.sector,
      amount: this.raport.amount,
      hours: this.raport.hours,
      date: this.raport.date,
      chests: this.raport.chests,
    });
  }

}
