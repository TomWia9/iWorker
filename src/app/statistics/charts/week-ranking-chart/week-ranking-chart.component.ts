import { Component, OnInit } from '@angular/core';

const SAMPLE_LINE_CHART_DATA: any[] = [
  { data: [65, 59, 80, 81, 56, 54, 30, 10], label: 'Pozycja w rankingu', pointRadius: 8},
  
  ];
  
const SAMPLE_LINE_CHART_LABELS: string[] = ['23.03.20', '24.03.20', '25.03.20', '26.03.20', '27.03.20', '28.03.20', '29.03.20'];

const LINE_CHART_COLORS = [{
  backgroundColor: 'rgba(15,78,133,0.2)',
  borderColor:  'rgba(3,64,128,0.5)',
  pointBackgroundColor: '#000',
  pointBorderColor: '#000',
  pointHoverBackgroundColor: '#555',
  pointHoverBorderColor: '#555',
  fill: "start"
}];


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

  public lineChartData: any[] = SAMPLE_LINE_CHART_DATA;
  public lineChartLabels: string[] = SAMPLE_LINE_CHART_LABELS;
  public lineChartType = 'line';
  public lineChartLegend = false;
  public lineChartColors = LINE_CHART_COLORS;
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          reverse: true,
          suggestedMin: 10,
          suggestedMax: 100,
          stepSize: 10,
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
    }
    
      
  }

  ngOnInit(): void {
  }

}
