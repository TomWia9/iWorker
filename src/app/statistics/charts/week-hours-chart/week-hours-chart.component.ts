import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[] = [
  { data: [10, 11, 9.5, 8.75, 10, 6.5, 6], label: 'Ilość godzin'},
  ];
  
  const SAMPLE_BARCHART_LABELS: string[] = ['23.03.20', '24.03.20', '25.03.20', '26.03.20', '27.03.20', '28.03.20', '29.03.20'];

  const BAR_CHART_COLORS = [{
    backgroundColor: 'rgba(6,214,160,0.2)',
    borderColor:  'rgba(0,200,140,0.5)',
    
  }];

@Component({
  selector: 'app-week-hours-chart',
  templateUrl: './week-hours-chart.component.html',
  styleUrls: ['./week-hours-chart.component.css']
})
export class WeekHoursChartComponent implements OnInit {

  constructor() { }

  public barChartData: any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartColors: any[] = BAR_CHART_COLORS;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
          display: true,
          ticks: {
              suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
          }
      }]
  },
  plugins: {
    datalabels: {
      display: true,
      anchor: 'center',
      align: 'center',
      color: 'white',
      font: {
       weight: 'bold',
       size: 10
    }

  }

}}

  ngOnInit(): void {
  }

}
