import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StatisticsService } from '../services/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  form: FormGroup;
  userID: number = 158;
  dateString: string;

  constructor(private fb: FormBuilder, private statisticsService: StatisticsService) { }

  ngOnInit(): void {

  var date = new Date();
  
     date.setDate(date.getDate()-1);
     this.dateString = date.toLocaleDateString();

    this.statisticsService.getMainStatistics(this.userID, this.dateString).subscribe(x  => {
      this.form = this.fb.group({
        rankingPosition: x.rankingPosition,
        amount: x.amount,
        hours: x.hours,
      });
   });

  


  }

}
