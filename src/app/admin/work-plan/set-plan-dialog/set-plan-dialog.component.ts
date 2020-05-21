import { Component, OnInit, Inject, ComponentFactoryResolver, ViewContainerRef, ComponentRef, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../../shared/user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WorkersListComponent } from '../../workers/workers-list/workers-list.component';

@Component({
  selector: 'app-set-plan-dialog',
  templateUrl: './set-plan-dialog.component.html',
  styleUrls: ['./set-plan-dialog.component.css']
})
export class SetPlanDialogComponent implements OnInit {
  form: FormGroup;
  showButton: boolean = false;
  dataList: User[] = [];
  displayedColumns = ['userID','name', 'surname'];
  @ViewChild('dynamicWorkersListComponent', {read: ViewContainerRef, static: true}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  constructor(
    public dialogRef: MatDialogRef<SetPlanDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      worker: ''
    })

    this.dataList = this.data.sector.workers;
    this.showWorkersList();
  }

  onExit(){
    this.dialogRef.close();
  }

  onChange(){
    this.showButton = true;
  }

  onAdd(value){
   
      this.dataList.push(value.worker);
     this.showWorkersList();
      const index = this.data.workers.findIndex(x => x.userID == value.worker.userID);
      this.data.workers.splice(index, 1);
    
    this.showButton = false;
   
  }

  onDelete(row: User){    
    this.data.workers.push(row);
    const index = this.dataList.findIndex(x => x.userID == row.userID);
    this.dataList.splice(index, 1);
    this.showWorkersList();
    this.form = this.fb.group({
      worker: ''
    })

  }

  showWorkersList(){
    if(this.componentRef){
      this.componentRef.destroy();
     }
    let childComponent = this.componentFactoryResolver.resolveComponentFactory(WorkersListComponent);
    this.componentRef = this.target.createComponent(childComponent);    
    this.componentRef.instance.workers = this.dataList;
    this.componentRef.instance.showFilter = false;

  }
}
