import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService) { }

  date = new Date();
  dateString: string;
  name: string;

  ngOnInit(): void {  
    this.date.setDate(this.date.getDate() + 1);
    this.dateString = this.date.toLocaleDateString();
    this.name = this.authService.getCurrentValue().name;
  }

}