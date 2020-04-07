import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-statistics-data',
  templateUrl: './statistics-data.component.html',
  styleUrls: ['./statistics-data.component.css']
})
export class StatisticsDataComponent implements OnInit {
  form: FormGroup;
  userID: string = '158';
  statsType: string;
  chartID: number;
  canShow: number = 0;
  statisticsData;
  chartData: any[] = [];
  chartLabels: string[] = [];
    
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private statisticsService: StatisticsService) { }

  ngOnInit(): void {
  
   this.chartID = this.route.snapshot.params.id; //1 - ranking, 2 - amount, 3 - hours
    
   this.statisticsService.getChartData(this.userID, 'month', this.chartID).subscribe(x  => { 
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
      console.log(this.chartData);
        this.canShow++;
    });

    this.statisticsService.getChartLabels(this.userID, 'month', this.chartID).subscribe(x => {
        this.chartLabels = x;
        console.log(this.chartLabels);
        this.canShow++;
    });
    

      // this.form = this.fb.group({
      //   max: this.statisticsData.max,
      //   total: this.statisticsData.total,
      //   min: this.statisticsData.min,
      //   avg: this.statisticsData.avg,
      //   avgMonth: this.statisticsData.avgMonth,
      //   avgWeek: this.statisticsData.avgWeek,
      // })

    this.form = this.fb.group({
      max: '3',
      total: '23',
      min: '65',
      avg: '20',
      avgMonth: '17',
      avgWeek: '22'
    })
  }

}
