import { Component, OnInit, Input } from '@angular/core';

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
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input() chartData: any [];
  @Input() chartLabels: string [];

  constructor() { }

  colors: any[] = [
    {
      backgroundColor: '#FF69B4',
      borderColor: '#111'
    }
  ];

  public lineChartData: any[]; 
  public lineChartLabels: string[]; 
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

    this.lineChartData = this.chartData;
    this.lineChartLabels = this.chartLabels;

  }

}
