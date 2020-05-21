import { Component, OnInit, ViewChild, ViewContainerRef, ComponentRef, ComponentFactoryResolver } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Sector } from '../../shared/sector';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SectorsService } from 'src/app/services/sectors.service';
import { AddSectorDialogComponent } from './add-sector-dialog/add-sector-dialog.component';
import { DeleteSectorDialogComponent } from './delete-sector-dialog/delete-sector-dialog.component';
import { EditSectorDialogComponent } from './edit-sector-dialog/edit-sector-dialog.component';
import { SectorsListComponent } from './sectors-list/sectors-list.component';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {
  form: FormGroup;
  @ViewChild('dynamicSectorsListComponent', {read: ViewContainerRef, static: true}) target: ViewContainerRef;
  private componentRef: ComponentRef<any>;
  sectors: Sector[];

  constructor(private fb: FormBuilder, public dialog: MatDialog, private sectorsService: SectorsService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      amount: ''
    })

    this.showSectorsList();

    this.sectorsService.getSectorsAmount().subscribe(x => {      
      this.form = this.fb.group({
        amount: x
      })
    })

  }

  addSector(): void {
    const dialogRef = this.dialog.open(AddSectorDialogComponent, {
       width: '500px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit(); //for amount and sectorsList refresh

    });
  }

  onSectorDelete(){
    const dialogRef = this.dialog.open(DeleteSectorDialogComponent, {
      width: '500px',
   });

   dialogRef.afterClosed().subscribe(() => {
     this.ngOnInit(); //for amount and workersList refresh
   });
  }

  onSectorEdit(){
    const dialogRef = this.dialog.open(EditSectorDialogComponent, {
      width: '500px',
   });

   dialogRef.afterClosed().subscribe(() => {
     this.ngOnInit(); //for amount and workersList refresh
   });
  }

  async showSectorsList(){

    await this.sectorsService.getSectorsList().toPromise().then(x => {      
      this.sectors = x;
    })

    if(this.componentRef){
     this.componentRef.destroy();
    }
 
     let childComponent = this.componentFactoryResolver.resolveComponentFactory(SectorsListComponent);
     this.componentRef = this.target.createComponent(childComponent);    
     this.componentRef.instance.sectors = this.sectors;
   }

}
