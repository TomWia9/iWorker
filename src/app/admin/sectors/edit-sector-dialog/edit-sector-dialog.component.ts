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
  success: boolean = null;
  newData: Sector = new Sector();
  constructor(public dialogRef: MatDialogRef<EditSectorDialogComponent>, private sectorsService: SectorsService, private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.form = this.fb.group({
      sectorName: '',
      workName: ''
    })
   
    this.sectorsService.getSectorsList().subscribe(x => {
      this.sectors = x;
    })
   
  }

  onSelectChange(event){    
    console.log(event.value.userID);
    this.selected = true;
  }

  onEdit(value){
    
    this.newData.sectorName = value.sectorName;
    this.newData.workName = value.workName;
    
    if(value.sector != ''){
    this.sectorsService.editSector(value.sector.id, this.newData).subscribe(x => { //pewnie nie zadziala bo id ale zobaczy sie
      this.success = x; //true or false
    })
  } else{
    this.success = false;
  }

    if(this.success){
      this.dialogRef.close();  
    }
  }

  onExit(){
    this.dialogRef.close();   
  }

}
