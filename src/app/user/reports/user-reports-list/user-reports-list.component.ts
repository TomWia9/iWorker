import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-reports-list',
  templateUrl: './user-reports-list.component.html',
  styleUrls: ['./user-reports-list.component.css']
})
export class UserReportsListComponent implements OnInit {
  userID: number;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.userID = this.authService.getCurrentValue().userID;
  }

}
