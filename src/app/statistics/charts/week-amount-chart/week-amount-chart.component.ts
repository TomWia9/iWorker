import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-amount-chart',
  templateUrl: './week-amount-chart.component.html',
  styleUrls: ['./week-amount-chart.component.css']
})
export class WeekAmountChartComponent implements OnInit {

  constructor() { }

  pieChartData: number[] = [350, 450, 120, 169];
  pieChartLabels: string[] = ['Maliny', 'Truskawki', 'Jerzyny', 'Borówki' ];
  colors: any[] = [
    {
      backgroundColor: ['#FF69B4', "#ff0000", '#191919', '#8A2BE2'],
      borderColor: '#111'
    }
  ];

  pieChartType= 'doughnut';

  ngOnInit(): void {
  }

}
