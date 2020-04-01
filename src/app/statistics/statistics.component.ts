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
  statistics;

  constructor(private fb: FormBuilder, private statisticsService: StatisticsService) { }

  ngOnInit(): void {

  //   this.statistics = this.statisticsService.getMainStatistics(userID).subscribe(x  => {
  //     this.statistics = x; 
  //  });

  // this.form = this.fb.group({
  //   rankingPosition: this.statistics.rankingPosition,
  //   totalAmount: this.statistics.totalAmount,
  //   totalHours: this.statistics.totalHours,
  // });

    this.form = this.fb.group({
      rankingPosition: '12',
      totalAmount: '103',
      totalHours: '123',
    });
  }

}
