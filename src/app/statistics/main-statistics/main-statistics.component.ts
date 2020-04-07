import { Component, OnInit } from '@angular/core';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-main-statistics',
  templateUrl: './main-statistics.component.html',
  styleUrls: ['./main-statistics.component.css']
})
export class MainStatisticsComponent implements OnInit {

  userID: string = '158';
  // data: number[] = [];
  // labels: string[] = [];
  lineChartData: any[] =[];
  pieChartData: any[] = [];
  barChartData: any[] = [];
  chartLabels: string[] = [];
  pieChartLabels: string[] = [];
  canShow: number = 0;
    
  constructor(private statisticsService: StatisticsService) {}

  ngOnInit(): void {
    
    //for line chart
  this.statisticsService.getChartData(this.userID, 'week', 1).subscribe( x=> {
    this.lineChartData = [{data: x, label: 'Pozycja w rankingu', pointRadius: 8}];
    this.canShow++;
  });

    this.statisticsService.getChartLabels(this.userID, 'week', 1).subscribe(x=>{
      this.chartLabels = x;
      this.canShow++;
    });

    //for pie chart
    this.statisticsService.getChartData(this.userID, 'week', 2).subscribe(x =>{
      this.pieChartData = x;
      this.canShow++;
    });
 
   this.statisticsService.getChartLabels(this.userID, 'week', 2).subscribe(x =>{
     this.pieChartLabels = x;
     this.canShow++;
   });
 
    // for bar chart
    this.statisticsService.getChartData(this.userID, 'week', 3).subscribe(x =>{
      this.barChartData = [{data: x, label: 'Ilość godzin'}];
      this.canShow++;
    });
 
    //labels will be the same as for lineChart
    
  }

}
