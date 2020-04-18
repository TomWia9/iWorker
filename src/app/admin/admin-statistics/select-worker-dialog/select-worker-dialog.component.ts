import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WorkersService } from 'src/app/services/workers.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkersList } from '../../workers/workers-list/workers-list';

@Component({
  selector: 'app-select-worker-dialog',
  templateUrl: './select-worker-dialog.component.html',
  styleUrls: ['./select-worker-dialog.component.css']
})
export class SelectWorkerDialogComponent implements OnInit {
  workers: WorkersList[];
  constructor(public dialogRef: MatDialogRef<SelectWorkerDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private workersService: WorkersService) { }

  ngOnInit(): void {
    this.workersService.getWorkersList().subscribe(x => {
      this.workers = x;
    })
    
  }

}
