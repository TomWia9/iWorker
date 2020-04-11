import { Component, OnInit } from '@angular/core';
import { RaportService } from 'src/app/services/raport.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-raports-list',
  templateUrl: './raports-list.component.html',
  styleUrls: ['./raports-list.component.css']
})
export class RaportsListComponent implements OnInit {
  raports = new MatTableDataSource();
  displayedColumns = ['number','date', 'workName'];
  userID: string;

  constructor(private raportService: RaportService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.userID = this.authService.getCurrentValue().userID;
     this.raportService.getRaportsList(this.userID).subscribe(x  => {
      this.raports = new MatTableDataSource(x); 
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

