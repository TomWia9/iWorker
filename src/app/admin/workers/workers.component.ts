import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDialogComponent } from '../register-dailog/register-dialog.component';
import { WorkersService } from 'src/app/services/workers.service';
import { WorkersListComponent } from './workers-list/workers-list.component';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {
  form: FormGroup;
  showCheckBoxes: boolean = false;
  @ViewChild('dynamicWorkersListComponent', {read: ViewContainerRef, static: true}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private router: Router, private workersService: WorkersService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.showWorkersList();

    this.form = this.fb.group({
      amount: ''
    })
    
   this.workersService.getWorkersAmount().subscribe(x => {
     this.form = this.fb.group({
       amount: x
     })
   })
  }

  manage(){
    this.showCheckBoxes = !this.showCheckBoxes;
    this.showWorkersList() //for refresh
  }

  addWorker(): void {
    const dialogRef = this.dialog.open(RegisterDialogComponent, {
       width: '500px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit(); //for amount and workersList refresh

      console.log('The dialog was closed');
    });
  }

  showWorkersList(){
    if(this.componentRef){
     this.componentRef.destroy();
    }
 
     let childComponent = this.componentFactoryResolver.resolveComponentFactory(WorkersListComponent);
     this.componentRef = this.target.createComponent(childComponent);
     this.componentRef.instance.showCheckBoxes = this.showCheckBoxes;
    
   }

}
