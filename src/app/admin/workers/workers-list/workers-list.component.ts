import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { WorkersService } from 'src/app/services/workers.service';
import { WorkersList } from './workers-list';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent implements OnInit {
  workers = new MatTableDataSource();
  displayedColumns;
  userID: number;
  amount: number;
  @Input() showCheckBoxes: boolean;
  selection = new SelectionModel<WorkersList>(true, []);
  constructor(private router: Router, private workersService: WorkersService) { }

  ngOnInit(): void {

    if(this.showCheckBoxes == true)
      this.displayedColumns = ['select', 'userID','name', 'surname'];
    else
      this.displayedColumns = ['userID','name', 'surname'];
      
     this.workersService.getWorkersList().subscribe(x  => {
      this.workers = new MatTableDataSource(x);       
    });
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.workers.filter = filterValue.trim().toLowerCase();
  }
}
