import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { WorkersList } from './workers-list';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent implements OnInit {
  @Input() workers: WorkersList[];
  dataSource;
  displayedColumns = ['userID','name', 'surname'];
  @Input() showFilter: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.workers);
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); 
  }

}
