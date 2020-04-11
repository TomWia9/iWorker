import { Component, OnInit } from '@angular/core';
import { StatisticsService } from 'src/app/services/statistics.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-statistics',
  templateUrl: './main-statistics.component.html',
  styleUrls: ['./main-statistics.component.css']
})
export class MainStatisticsComponent implements OnInit {

  userID: string;
  wait: number = 0;
  lineChartData: any[] =[];
  pieChartData: any[] = [];
  barChartData: any[] = [];
  chartLabels: string[] = [];
  pieChartLabels: string[] = [];
    
  constructor(private statisticsService: StatisticsService, private authService: AuthService) {}

  ngOnInit(): void {
    this.userID = this.authService.getCurrentValue().userID;

    //for line chart
    this.statisticsService.getChartData(this.userID, 7, 1).subscribe( x=> {
      this.lineChartData = [{data: x, label: 'Pozycja w rankingu', pointRadius: 8}];
      this.wait++;
    });

    this.statisticsService.getChartLabels(this.userID, 7, 1).subscribe(x=>{
      this.chartLabels = x;
      this.wait++;
    });
    //for pie chart
    this.statisticsService.getChartData(this.userID, 7, 2).subscribe(x =>{
      this.pieChartData = x;
      this.wait++;
    });
 
    this.statisticsService.getChartLabels(this.userID, 7, 2).subscribe(x =>{
      this.pieChartLabels = x;
      this.wait++;
    });

    // for bar chart
    this.statisticsService.getChartData(this.userID, 7, 3).subscribe(x =>{
      this.barChartData = [{data: x, label: 'Ilość godzin'}];
      this.wait++;
    });

    //labels will be the same as for lineChart
  }

}
