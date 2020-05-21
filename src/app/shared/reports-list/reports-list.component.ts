import { Component, OnInit, Input } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

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
  reports = new MatTableDataSource();

  constructor(private reportService: ReportService, private router: Router) {}

  ngOnInit(): void {
    console.log("Inputs: " + "filter: " + this.filter + " userID: " + this.userID + " displayedComlumns: " + this.displayedColumns
    + " peroid: " + this.peroid + " allReports: " + this.allWorkersReports + " showWorkerNumber: " + this.showWorkerNumber + " showDate: " + this.showDate);

    if(this.allWorkersReports == false){
      this.reportService.getReportsList(this.userID, this.peroid).subscribe(x  => {
        this.reports = new MatTableDataSource(x); 
    });
    }
    else{
      //osobna funkcja
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
    this.router.navigate(['/report', row.id]);
  } 

}

