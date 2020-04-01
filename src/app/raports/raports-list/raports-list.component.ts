import { Component, OnInit } from '@angular/core';
import { RaportService } from 'src/app/services/raport.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-raports-list',
  templateUrl: './raports-list.component.html',
  styleUrls: ['./raports-list.component.css']
})
export class RaportsListComponent implements OnInit {
  raports;
  displayedColumns = ['number', 'date', 'workName']

  constructor(private raportService: RaportService) { }

  ngOnInit(): void {
  //   this.raports = this.raportService.getRaportsList(this.userID).subscribe(x  => {
  //     this.raports = new MatTableDataSource(x); //propably it should be new MatTableDataSource(x);, I will se when API will be ready
  // });
  }

}

