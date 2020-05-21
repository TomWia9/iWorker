import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StatisticsService } from 'src/app/services/statistics.service';
import { ReportService } from 'src/app/services/report.service';
import { MatTableDataSource } from '@angular/material/table';
import { ReportDialogComponent } from '../admin-reports/report-dialog/report-dialog.component';
import { NewMessageToAllDialogComponent } from 'src/app/admin/admin-messages/new-message-to-all-dialog/new-message-to-all-dialog.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
  export class AdminDashboardComponent implements OnInit {
    wait: number = 0;
    chartData: any[] = [];
    chartLabels: string[] = [];
    displayedColumns = ['number', 'userID', 'workName'];

  constructor(public dialog: MatDialog, private statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.getChartData();
  }

  getChartData(){
    this.statisticsService.getTotalChartData(1).subscribe(x  => {
        this.chartData = x;
        this.wait++;
        
 });

  this.statisticsService.getTotalChartLabels().subscribe(x => {
     this.chartLabels = x;
     this.wait++;
     
 });

 }

  newMessageToAll(){
    const dialogRef = this.dialog.open(NewMessageToAllDialogComponent, {
      width: '500px', 
      
   });

   dialogRef.afterClosed().subscribe(() => {
   });
  }

  navigateTo(row: any) {

    const dialogRef = this.dialog.open(ReportDialogComponent, {
      width: '1000px',
      data: {reportID: row.id, userID: row.userID}
      
   });

   dialogRef.afterClosed().subscribe(() => {
   });
  } 

}
