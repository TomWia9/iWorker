import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Sector } from '../sector';
import { MatDialogRef } from '@angular/material/dialog';
import { SectorsService } from 'src/app/services/sectors.service';

@Component({
  selector: 'app-edit-sector-dialog',
  templateUrl: './edit-sector-dialog.component.html',
  styleUrls: ['./edit-sector-dialog.component.css']
})
export class EditSectorDialogComponent implements OnInit {

  form: FormGroup;
  sectors: Sector[];
  selected: boolean = false;
  edited: boolean = null;
  newData: Sector = new Sector();
  constructor(public dialogRef: MatDialogRef<EditSectorDialogComponent>, private sectorsService: SectorsService, private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.form = this.fb.group({
      sector: '',
      sectorName: '',
      workName: ''
    })
   
    this.sectorsService.getSectorsList().subscribe(x => {
      this.sectors = x;
    })
   
  }

  onSelectChange(event){    
    this.selected = true;
  }

  async onEdit(value){
    
    
    if(value.sector != '' && value.sectorName != '' && value.workName != ''){
      
      this.newData.id = value.sector.id;
      this.newData.sectorName = value.sectorName;
      this.newData.workName = value.workName;
     
   await this.sectorsService.editSector(this.newData).toPromise().then(x => { 
      this.edited = x; //true or false
    })
  } else{
    this.edited = false;
  }

    if(this.edited){
      this.dialogRef.close();  
    }
  }

  onExit(){
    this.dialogRef.close();   
  }

}
