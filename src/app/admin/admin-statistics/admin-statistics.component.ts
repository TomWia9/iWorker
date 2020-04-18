import { Component, OnInit } from '@angular/core';
import { WorkersList } from '../workers/workers-list/workers-list';
import { StatisticsService } from 'src/app/services/statistics.service';
import { MatDialog } from '@angular/material/dialog';
import { SelectWorkerDialogComponent } from './select-worker-dialog/select-worker-dialog.component';
import { Ranking } from 'src/app/shared/ranking/ranking';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-statistics',
  templateUrl: './admin-statistics.component.html',
  styleUrls: ['./admin-statistics.component.css']
})
export class AdminStatisticsComponent implements OnInit {
  wait: number = 0; 
  chartData: any[] = [];
  chartLabels: string[] = [];
  canShowWorkerStats: boolean = false;
  selected: WorkersList = new WorkersList();
  displayedColumns = ['position','userID', 'name', 'surname', 'ratio'];
  top3 = new MatTableDataSource();
  
    constructor(private statisticsService: StatisticsService, public dialog: MatDialog) {}

  ngOnInit(): void {
    
    this.getChartData();
    this.getTop3();
    
    
  }

   getChartData(){
     this.statisticsService.getTotalChartData().subscribe(x  => { //it will be another func without any args, i will add it later to service 
         this.chartData = x;
         this.wait++;
         
  });

   this.statisticsService.getTotalChartLabels().subscribe(x => {
      this.chartLabels = x;
      this.wait++;
      
  });

  }

  onSelectWorker(): void{
    this.canShowWorkerStats = false;
    const dialogRef = this.dialog.open(SelectWorkerDialogComponent, {
      width: '500px',
      data: {selected: this.selected}
   });

   dialogRef.afterClosed().subscribe(x => {
   
    if(x !== undefined){
      this.selected = x;
      this.canShowWorkerStats = true;

    }
   });
   
  }

  getTop3(){
    this.statisticsService.getTop3().subscribe(x => {
      this.top3 = new MatTableDataSource(x);      
    })
  }

}
