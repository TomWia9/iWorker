import { Component, OnInit } from '@angular/core';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-main-statistics',
  templateUrl: './main-statistics.component.html',
  styleUrls: ['./main-statistics.component.css']
})
export class MainStatisticsComponent implements OnInit {

  userID: string = '158';
  data;
  labels;
  lineChartData: any[] = [];
  pieChartData: any[] = [];
  barChartData: any[] = [];
  chartLabels: string[] = [];
  pieChartLabels: string[] = [];
    
  constructor(private statisticsService: StatisticsService) { }

  ngOnInit(): void {
    
    // for line chart
    this.data = this.statisticsService.getChartData(this.userID, 'week', 1).subscribe(x  => {
          this.data = x; 
     });

    this.labels = this.statisticsService.getChartLabels(this.userID, 'week', 1).subscribe(x  => {
      this.labels = x; 
    });

    this.lineChartData = [{data: this.data, label: 'Pozycja w rankingu', pointRadius: 8}];
    this.chartLabels = this.labels;

    // for pie chart
    this.data = this.statisticsService.getChartData(this.userID, 'week', 2)
    .subscribe(x  => {
      this.data = x; 
     });

    this.labels = this.statisticsService.getChartLabels(this.userID, 'week', 2).subscribe(x  => {
      this.labels = x; 
    });

    this.pieChartData = this.data
    this.pieChartLabels = this.labels;

    // for bar chart
    this.data = this.statisticsService.getChartData(this.userID, 'week', 3).subscribe(x  => {
      this.data = x; 
    });

    this.barChartData = [{data: this.data, label: 'Ilość godzin'}];

    //labels will be the same as for lineChart
    
  }

}
