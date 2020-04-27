import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewMessageToAllDialogComponent } from '../messages/new-message-to-all-dialog/new-message-to-all-dialog.component';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
  export class AdminDashboardComponent implements OnInit {
    wait: number = 0;
    chartData: any[] = [];
    chartLabels: string[] = [];
    name: string = "Mathias"
    surname: string = "Muller"
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

}
