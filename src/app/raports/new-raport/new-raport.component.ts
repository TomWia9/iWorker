import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RaportService } from 'src/app/services/raport.service';
import { RaportDetails } from '../raport-details/raportDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-raport',
  templateUrl: './new-raport.component.html',
  styleUrls: ['./new-raport.component.css']
})
export class NewRaportComponent implements OnInit {
  form: FormGroup;
  works: string[] = ['Maliny', 'Truskawki', 'Jerzyny', 'Borówki'];
  sectors: string[] = ['A1', 'B12', 'EZ', 'ES', 'C3'];
  chests: string[] = ['8x250', '16x250', '8x500', '10x200', '20x100'];

  constructor(private fb: FormBuilder, private raportService: RaportService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: '158',
      name: 'Tomasz',
      surname: 'Wiatrowski',
      workName: '',
      sector: '',
      amount: '',
      hours: '',
      date: '',
      chests: '',
    });
  }

  onSubmit(value){
    if (value.id != '' && value.name !== '' && value.surname !== '' && value.date !== '' && value.hours !== '' && value.workName !== '' 
        && value.sector !== '' && value.amount !== ''){
          
          // const newRaport = value as RaportDetails; 
          // this.raportService.createRaport(this.userID, newRaport).subscribe(x=> {
          //   this.router.navigate(['/raport',x]);
          // })
      
      console.log("Dodano raport");
      } else{
        console.log("Nie udało się dodać raportu")
      };
  }
  
}

