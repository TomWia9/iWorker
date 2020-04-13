import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent implements OnInit {
  workers = new MatTableDataSource();
  displayedColumns = ['userID','name', 'surname'];
  userID: number;
  constructor(private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {
     this.usersService.getUsersList().subscribe(x  => {
      this.workers = new MatTableDataSource(x);       
    });
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.workers.filter = filterValue.trim().toLowerCase();
  }

  navigateTo(row: any) {
    this.router.navigate(['/raport', row.id]);
  } 

}
