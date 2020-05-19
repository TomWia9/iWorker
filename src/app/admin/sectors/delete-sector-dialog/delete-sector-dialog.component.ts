import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Sector } from '../../../shared/sector';
import { MatDialogRef } from '@angular/material/dialog';
import { SectorsService } from 'src/app/services/sectors.service';

@Component({
  selector: 'app-delete-sector-dialog',
  templateUrl: './delete-sector-dialog.component.html',
  styleUrls: ['./delete-sector-dialog.component.css']
})
export class DeleteSectorDialogComponent implements OnInit {
  form: FormGroup;
  sectors: Sector[];
  deleted: boolean = null;
  constructor(public dialogRef: MatDialogRef<DeleteSectorDialogComponent>, private sectorsService: SectorsService, private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.form = this.fb.group({
      sector: ''
    })
    this.sectorsService.getSectorsList().subscribe(x => {
      this.sectors = x;
    })
  }

  onExit(){
    this.dialogRef.close();   
  }

  async onDelete(value){
    
    if(value.sector != ''){
      await this.sectorsService.deleteSector(value.sector.id).toPromise().then(x => {
        this.deleted = x; //true or false
      })
    } else{
      this.deleted = false;
    }

    if(this.deleted){
      this.dialogRef.close();  
    }
  }

}
