import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ranking-list',
  templateUrl: './ranking-list.component.html',
  styleUrls: ['./ranking-list.component.css']
})
export class RankingListComponent implements OnInit {
  @Input() ranking = new MatTableDataSource();
  displayedColumns = ['position','userID', 'name', 'surname', 'ratio'];
  constructor() { }

  ngOnInit(): void {
  }
}
