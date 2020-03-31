import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-statistics',
  templateUrl: './main-statistics.component.html',
  styleUrls: ['./main-statistics.component.css']
})
export class MainStatisticsComponent implements OnInit {

   SAMPLE_LINE_CHART_DATA: any[] = [
    { data: [65, 59, 80, 81, 56, 54, 30, 10], label: 'Pozycja w rankingu', pointRadius: 8},
    
    ];
    
   SAMPLE_LABELS: string[] = ['23.03.20', '24.03.20', '25.03.20', '26.03.20', '27.03.20', '28.03.20', '29.03.20'];

    SAMPLE_BARCHART_DATA: any[] = [
    { data: [10, 11, 9.5, 8.75, 10, 6.5, 6], label: 'Ilość godzin'},
    ];

    pieChartData: number[] = [350, 450, 120, 169];
    pieChartLabels: string[] = ['Maliny', 'Truskawki', 'Jerzyny', 'Borówki' ];
    
  constructor() { }

  ngOnInit(): void {
  }

}
