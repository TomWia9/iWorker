import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewMessageToAllDialogComponent } from '../messages/new-message-to-all-dialog/new-message-to-all-dialog.component';
import { StatisticsService } from 'src/app/services/statistics.service';
import { AuthService } from 'src/app/services/auth.service';
import { RaportService } from 'src/app/services/raport.service';
import { MatTableDataSource } from '@angular/material/table';
import { RaportDialogComponent } from '../admin-raports/raport-dialog/raport-dialog.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
  export class AdminDashboardComponent implements OnInit {
    wait: number = 0;
    chartData: any[] = [];
    chartLabels: string[] = [];
    name: string;
    surname: string;
    raports = new MatTableDataSource();
    displayedColumns = ['number', 'userID', 'workName'];

  constructor(public dialog: MatDialog, private statisticsService: StatisticsService, private raportService: RaportService, private authService: AuthService) { }

  ngOnInit(): void {
    this.name = this.authService.getCurrentValue().name;
    this.surname = this.authService.getCurrentValue().surname;
    this.getChartData();

    this.raportService.getAllRaportsList(1).subscribe(x  => {
      this.raports = new MatTableDataSource(x); 
      
  });
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

    const dialogRef = this.dialog.open(RaportDialogComponent, {
      width: '1000px',
      data: {raportID: row.id, userID: row.userID}
      
   });

   dialogRef.afterClosed().subscribe(() => {
   });
  } 

}
