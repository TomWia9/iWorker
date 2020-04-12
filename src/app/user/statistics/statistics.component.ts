import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StatisticsService } from '../../services/statistics.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  form: FormGroup;
  userID: number;
  dateString: string;

  constructor(private fb: FormBuilder, private statisticsService: StatisticsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userID = this.authService.getCurrentValue().userID;
    this.form = this.fb.group({
      rankingPosition: '',
      amount: '',
      hours:  '',
    });

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
