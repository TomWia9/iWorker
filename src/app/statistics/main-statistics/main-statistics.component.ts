import { Component, OnInit } from '@angular/core';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-main-statistics',
  templateUrl: './main-statistics.component.html',
  styleUrls: ['./main-statistics.component.css']
})
export class MainStatisticsComponent implements OnInit {

   lineChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 54, 30, 10], label: 'Pozycja w rankingu', pointRadius: 8},
    
    ];
    
   chartLabels: string[] = ['23.03.20', '24.03.20', '25.03.20', '26.03.20', '27.03.20', '28.03.20', '29.03.20'];

    barChartData: any[] = [
    { data: [10, 11, 9.5, 8.75, 10, 6.5, 6], label: 'Ilość godzin'},
    ];

    pieChartData: number[] = [350, 450, 120, 169];
    pieChartLabels: string[] = ['Maliny', 'Truskawki', 'Jerzyny', 'Borówki' ];
    
  constructor(private statisticsService: StatisticsService) { }

  ngOnInit(): void {

    // this.lineChartData = this.statisticsService.getLineChartData(this.userID).subscribe(x  => {
    //       this.lineChartData = x; 
    //  });

    //  this.chartLabels = this.statisticsService.getChartLabels(this.userID).subscribe(x  => {
    //   this.chartLabels = x; 
    // });

    // this.barChartData = this.statisticsService.getBarChartData(this.userID).subscribe(x  => {
    //   this.barChartData = x; 
    // });

    // this.pieChartData = this.statisticsService.getPieChartData(this.userID).subscribe(x  => {
    //   this.pieChartData = x; 
    // });

    // this.pieChartLabels = this.statisticsService.getPieChartLabels(this.userID).subscribe(x  => {
    //   this.pieChartLabels = x; 
    // });
    
  }

}
