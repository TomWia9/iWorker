import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input() chartData: number [];
  @Input() chartLabels: string [];

  constructor() { }


  pieChartData: number[];
  pieChartLabels: string[]; 
  colors: any[] = [
    {
      backgroundColor: ['#FF69B4', "#ff0000", '#191919', '#8A2BE2'],
      borderColor: '#111'
    }
  ];

  public pieChartOptions: any = {
    responsive: true,
    
  plugins: {
    datalabels: {
      color: 'white',
      font: {
       weight: 'bold',
       size: 10
    }
  }

}}

  pieChartType= 'doughnut';

  ngOnInit(): void {    
    this.pieChartData = this.chartData;
    this.pieChartLabels = this.chartLabels;
  }

}
