import { Component, OnInit, Input } from '@angular/core';
import { Sector } from '../../../shared/sector';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-sectors-list',
  templateUrl: './sectors-list.component.html',
  styleUrls: ['./sectors-list.component.css']
})
export class SectorsListComponent implements OnInit {

  @Input() sectors: Sector[];
  dataSource;
  displayedColumns = ['sectorName', 'workName'];
  
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.sectors);
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); 
  }

}
