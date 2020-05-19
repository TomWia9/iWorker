import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../shared/user';

@Component({
  selector: 'app-select-worker-dialog',
  templateUrl: './select-worker-dialog.component.html',
  styleUrls: ['./select-worker-dialog.component.css']
})
export class SelectWorkerDialogComponent implements OnInit {
  workers: User[];
  constructor(public dialogRef: MatDialogRef<SelectWorkerDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private workersService: UsersService) { }

  ngOnInit(): void {
    this.workersService.getWorkersList().subscribe(x => {
      this.workers = x;
    })
    
  }

}
