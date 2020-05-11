import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SectorsService } from 'src/app/services/sectors.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-sector-dialog',
  templateUrl: './add-sector-dialog.component.html',
  styleUrls: ['./add-sector-dialog.component.css']
})
export class AddSectorDialogComponent implements OnInit {
  form: FormGroup;
  wrong: boolean = null;

  constructor(private fb: FormBuilder, private sectorsService: SectorsService, public dialogRef: MatDialogRef<AddSectorDialogComponent>) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      sectorName: '',
      workName: ''
    });
  }

  onSubmit(value){
    if(value.sectorName != '' && value.workName != ''){      
      this.sectorsService.addSector(value).subscribe(x => {
        this.wrong = x;
      });
    } else{
      this.wrong = true;
    }

    this.ngOnInit(); //to clear form
     
  }

  onExit(){
    this.dialogRef.close();   
  }

}
