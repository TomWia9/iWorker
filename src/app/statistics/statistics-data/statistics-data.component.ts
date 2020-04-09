import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StatisticsService } from 'src/app/services/statistics.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-statistics-data',
  templateUrl: './statistics-data.component.html',
  styleUrls: ['./statistics-data.component.css']
})
export class StatisticsDataComponent implements OnInit {
  form: FormGroup;
  userID: string;
  statsType: string;
  chartID: number;
  wait: number = 0;
  statisticsData;
  chartData: any[] = [];
  chartLabels: string[] = [];
    
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private statisticsService: StatisticsService, private userService: UserService) { }

  ngOnInit(): void {
    this.userID = this.userService.userInfo.userID;

    this.form = this.fb.group({
      max: '',
      total: '',
      min: '',
      avg: '',
      avgMonth: '',
      avgWeek: ''
    })
  
   this.chartID = this.route.snapshot.params.id; //1 - ranking, 2 - amount, 3 - hours
    
   this.statisticsService.getChartData(this.userID, 31, this.chartID).subscribe(x  => { 
        switch(+this.chartID){
          case 1: {
            this.statsType = 'rankingu'
            this.chartData = [{data: x, label: 'Pozycja w rankingu', pointRadius: 8}];
            break;
          }
          case 2: {
            this.statsType = 'zbiorów'
            this.chartData = x;
            break;
          }
          case 3: {
            this.statsType = 'godzin pracy'
            this.chartData = [ {data: x, label: 'Ilość godzin'} ];
            break;
          }
      }
        this.wait++;
    });

    this.statisticsService.getChartLabels(this.userID, 31, this.chartID).subscribe(x => {
        this.chartLabels = x;
        this.wait++;
    });

    this.statisticsService.getDataStatistics(this.userID, this.chartID).subscribe(x => {
      this.form = this.fb.group({
        max: x.max,
        total: x.total,
        min: x.min,
        avg: x.avg,
        avgMonth: x.avgMonth,
        avgWeek: x.avgWeek,
      })
    })
    

      

    
  }

}
