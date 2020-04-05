import { Component, OnInit } from '@angular/core';
import { RaportService } from 'src/app/services/raport.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raports-list',
  templateUrl: './raports-list.component.html',
  styleUrls: ['./raports-list.component.css']
})
export class RaportsListComponent implements OnInit {
  raports = new MatTableDataSource();
  displayedColumns = ['number','date', 'workName']

  constructor(private raportService: RaportService, private router: Router) { }

  ngOnInit(): void {
     this.raportService.getRaportsList(158).subscribe(x  => {
      this.raports = new MatTableDataSource(x); 
      console.log(x);
  });
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.raports.filter = filterValue.trim().toLowerCase();
  }

  navigateTo(row: any) {
    this.router.navigate(['/raport', row.id]);
  } 

}

