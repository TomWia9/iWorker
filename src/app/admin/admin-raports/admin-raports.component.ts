import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RaportService } from 'src/app/services/raport.service';
import { Router } from '@angular/router';
import { WorkersService } from 'src/app/services/workers.service';
import { WorkersList } from '../workers/workers-list/workers-list';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RaportDialogComponent } from './raport-dialog/raport-dialog.component';

@Component({
  selector: 'app-admin-raports',
  templateUrl: './admin-raports.component.html',
  styleUrls: ['./admin-raports.component.css']
})
export class AdminRaportsComponent implements OnInit {
  form: FormGroup;
  raports = new MatTableDataSource();
  raportsOfWorker = new MatTableDataSource();
  displayedColumnsForAll = ['number', 'userID', 'date', 'workName'];
  displayedColumns = ['number','date', 'workName'];
  workers: WorkersList[] = [];
  showRaportsOfWorker: boolean = false;
  workerID: number;
  
  constructor(private raportService: RaportService, private workersService: WorkersService, private router: Router, private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      worker: ''
    })

    this.raportService.getAllRaportsList().subscribe(x  => {
      this.raports = new MatTableDataSource(x); 
      console.log(this.raports);
      
  });
    this.workersService.getWorkersList().subscribe(x => {
      this.workers = x;
    })
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.raports.filter = filterValue.trim().toLowerCase();
  }

  navigateTo(row: any) {

    if(row.userID){
      this.workerID = row.userID;
    }

    const dialogRef = this.dialog.open(RaportDialogComponent, {
      width: '1000px',
      data: {raportID: row.id, userID: this.workerID}
      
   });

   dialogRef.afterClosed().subscribe(() => {
   });
  } 

  onChange(value){
    this.workerID = value;
    this.showRaportsOfWorker = true;
    this.raportService.getRaportsList(value).subscribe(x => {
      this.raportsOfWorker = new MatTableDataSource(x);
    })
    
  }

}
