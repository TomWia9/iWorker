import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ranking-statistics',
  templateUrl: './ranking-statistics.component.html',
  styleUrls: ['./ranking-statistics.component.css']
})
export class RankingStatisticsComponent implements OnInit {

  type: string = "ranking";

  constructor() { }

  ngOnInit(): void {
  }

}
