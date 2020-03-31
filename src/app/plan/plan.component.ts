import { Component, OnInit, ViewChild, ElementRef, Input, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Plan } from './plan';
import { PlanDetailsComponent } from './plan-details/plan-details.component';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
 
  date: Date;
  @ViewChild('dateInput', {static: true}) dateInput: ElementRef;
  @ViewChild('dynamicPlanDetailsComponent', {read: ViewContainerRef, static: false}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;

  constructor(private fb: FormBuilder, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
   
  }

  showPlan(){
   if(this.componentRef){
    this.componentRef.destroy();
   }
    this.date = this.dateInput.nativeElement.value;

    let childComponent = this.componentFactoryResolver.resolveComponentFactory(PlanDetailsComponent);
    this.componentRef = this.target.createComponent(childComponent);
    this.componentRef.instance.date = this.date;
   
  }

}
