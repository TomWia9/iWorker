import { Component, OnInit, Input } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ReportDialogComponent } from '../report-dialog/report-dialog.component';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {
  @Input() filter: boolean = true;
  @Input() userID: number;
  @Input() displayedColumns = ['number','date', 'workName'];
  @Input() peroid: number = 100; //reports from 100 days past by default
  @Input() allWorkersReports: boolean = false;
  @Input() showWorkerNumber: boolean = true;
  @Input() showDate: boolean = true;
  @Input() changeHeight: string = '200px';
  reports = new MatTableDataSource();

  constructor(private reportService: ReportService,  public dialog: MatDialog) {}

  ngOnInit(): void {
    if(this.allWorkersReports == false){
      this.reportService.getReportsList(this.userID, this.peroid).subscribe(x  => {
        this.reports = new MatTableDataSource(x); 
    });
    }
    else{
      this.reportService.getAllWorkersReportsList(this.peroid).subscribe(x  => {
        this.reports = new MatTableDataSource(x); 
    });
    }
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.reports.filter = filterValue.trim().toLowerCase();
  }

  navigateTo(row: any) {
    const dialogRef = this.dialog.open(ReportDialogComponent, {
      width: '1000px',
      data: {reportID: row.id},
   });

   dialogRef.afterClosed().subscribe(() => {
     this.ngOnInit(); 
   });
  } 

}

