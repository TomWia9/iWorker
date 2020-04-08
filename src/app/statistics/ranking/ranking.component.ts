import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  ranking = new MatTableDataSource();
  displayedColumns = ['position','userID', 'name', 'surname', 'ratio'];
  date: string = "07.04.2020";
  @ViewChild('dateInput', {static: true}) dateInput: ElementRef;

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.statisticsService.getRanking(this.date).subscribe(x  => {
      this.ranking = new MatTableDataSource(x); 
    });
  }

    applyFilter(event: Event){
      const filterValue = (event.target as HTMLInputElement).value;
      this.ranking.filter = filterValue.trim().toLowerCase();
    }

    changeDate(){
      this.date = this.dateInput.nativeElement.value;
      this.ngOnInit();
    }

}
