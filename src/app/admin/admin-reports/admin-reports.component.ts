import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from '../../shared/user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReportsListComponent } from 'src/app/shared/Reports/reports-list/reports-list.component';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.css']
})
export class AdminReportsComponent implements OnInit {
  form: FormGroup;
  displayedColumnsForAll = ['number', 'userID', 'date', 'workName'];
  displayedColumns = ['number','date', 'workName'];
  workers: User[] = [];
  @ViewChild('dynamicReportsListComponent', {read: ViewContainerRef, static: false}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  constructor(private workersService: UsersService, private fb: FormBuilder, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      worker: ''
    })

    this.workersService.getWorkersList().subscribe(x => {
      this.workers = x;
    })
  }

  onChange(value){   
    if(this.componentRef){
      this.componentRef.destroy();
     }
  
      let childComponent = this.componentFactoryResolver.resolveComponentFactory(ReportsListComponent);
      this.componentRef = this.target.createComponent(childComponent);
      this.componentRef.instance.userID = value;
      this.componentRef.instance.showWorkerNumber = false;
      this.componentRef.instance.displayedColumns = this.displayedColumns;
      this.componentRef.instance.peroid = 60;
      this.componentRef.instance.changeHeight = '300px';
  }

}
