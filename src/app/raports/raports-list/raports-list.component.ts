import { Component, OnInit } from '@angular/core';
import { RaportService } from 'src/app/services/raport.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-raports-list',
  templateUrl: './raports-list.component.html',
  styleUrls: ['./raports-list.component.css']
})
export class RaportsListComponent implements OnInit {
  raports = new MatTableDataSource();
  displayedColumns = ['number', 'date', 'workName']

  constructor(private raportService: RaportService) { }

  ngOnInit(): void {
     this.raportService.getRaportsList(158).subscribe(x  => {
      this.raports = new MatTableDataSource(x); 
      console.log(x);
  });
  
  }

}

