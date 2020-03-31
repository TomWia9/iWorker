import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amount-statistics',
  templateUrl: './amount-statistics.component.html',
  styleUrls: ['./amount-statistics.component.css']
})
export class AmountStatisticsComponent implements OnInit {
  type: string = 'amount';
  constructor() { }

  ngOnInit(): void {
  }

}
