import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReportService } from 'src/app/services/report.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from '../../shared/user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ReportDialogComponent } from './report-dialog/report-dialog.component';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.css']
})
export class AdminReportsComponent implements OnInit {
  form: FormGroup;
  reports = new MatTableDataSource();
  reportsOfWorker = new MatTableDataSource();
  displayedColumnsForAll = ['number', 'userID', 'date', 'workName'];
  displayedColumns = ['number','date', 'workName'];
  workers: User[] = [];
  showReportsOfWorker: boolean = false;
  workerID: number;
  
  constructor(private reportService: ReportService, private workersService: UsersService, private router: Router, private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      worker: ''
    })

    this.reportService.getAllReportsList(60).subscribe(x  => {
      this.reports = new MatTableDataSource(x); 
      
  });
    this.workersService.getWorkersList().subscribe(x => {
      this.workers = x;
    })
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.reports.filter = filterValue.trim().toLowerCase();
  }

  navigateTo(row: any) {

    if(row.userID){
      this.workerID = row.userID;
    }

    const dialogRef = this.dialog.open(ReportDialogComponent, {
      width: '1000px',
      data: {reportID: row.id, userID: this.workerID}
      
   });

   dialogRef.afterClosed().subscribe(() => {
   });
  } 

  onChange(value){
    this.workerID = value;
    this.showReportsOfWorker = true;
    this.reportService.getReportsList(value).subscribe(x => {
      this.reportsOfWorker = new MatTableDataSource(x);
    })
    
  }

}
