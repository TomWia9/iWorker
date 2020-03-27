import { Component, OnInit } from '@angular/core';
import { RaportDetails } from './raportDetails';
import { ActivatedRoute } from '@angular/router';
import { RaportService } from 'src/app/services/raport.service';

@Component({
  selector: 'app-raport-details',
  templateUrl: './raport-details.component.html',
  styleUrls: ['./raport-details.component.css']
})
export class RaportDetailsComponent implements OnInit {
  raport: RaportDetails;
  constructor(private route: ActivatedRoute, private raportService: RaportService) { } //it will be a service in the future

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.raportService.getDetails(id).subscribe(x => {
      this.raport = x;
    })
  }

}
