import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  date = new Date();
  dateString: string;

  ngOnInit(): void {  
    this.date.setDate(this.date.getDate() + 1);
    this.dateString = this.date.toLocaleDateString();
  }

}
