import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[] = [
  { data: [65, 59, 80, 81, 56, 54, 30, 10], label: 'Pozycja w rankingu'},
  
  ];
  
  const SAMPLE_BARCHART_LABELS: string[] = ['23.03.20', '24.03.20', '25.03.20', '26.03.20', '27.03.20', '28.03.20', '29.03.20'];

@Component({
  selector: 'app-week-ranking-chart',
  templateUrl: './week-ranking-chart.component.html',
  styleUrls: ['./week-ranking-chart.component.css']
})
export class WeekRankingChartComponent implements OnInit {

  constructor() { }

  colors: any[] = [
    {
      backgroundColor: '#FF69B4',
      borderColor: '#111'
    }
  ];

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  ngOnInit(): void {
  }

}
