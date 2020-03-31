import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  @Input() chartData: any [];
  @Input() chartLabels: string [];

  constructor() { }

  public barChartData: any[];
  public barChartLabels: string[]; 
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartColors: any[] = [{
    backgroundColor: 'rgba(6,214,160,0.2)',
    borderColor:  'rgba(0,200,140,0.5)',
    
  }];
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
    this.barChartData = this.chartData;
    this.barChartLabels = this.chartLabels;
  }

}
