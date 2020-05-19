import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.css']
})
export class ReportsListComponent implements OnInit {
  reports = new MatTableDataSource();
  displayedColumns = ['number','date', 'workName'];
  userID: number;

  constructor(private reportService: ReportService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userID = this.authService.getCurrentValue().userID;
     this.reportService.getReportsList(this.userID).subscribe(x  => {
      this.reports = new MatTableDataSource(x); 
  });

  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.reports.filter = filterValue.trim().toLowerCase();
  }

  navigateTo(row: any) {
    this.router.navigate(['/report', row.id]);
  } 

}

