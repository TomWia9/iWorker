import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDialogComponent } from '../register-dailog/register-dialog.component';
import { WorkersService } from 'src/app/services/workers.service';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router, private workersService: WorkersService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      amount: ''
    })
    
   this.workersService.getWorkersAmount().subscribe(x => {
     this.form = this.fb.group({
       amount: x
     })
   })
  }

  addWorker(): void {
    const dialogRef = this.dialog.open(RegisterDialogComponent, {
       width: '500px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
      console.log('The dialog was closed');
    });
  }

}
