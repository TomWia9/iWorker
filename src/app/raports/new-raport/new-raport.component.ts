import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Work } from '../work';
import { Sector } from '../sector';
import { Chest } from '../chest';
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
  works: Work[] = [
    {name: "Maliny"},
    {name: "Truskawki"},
    {name: "Jerzyny"},
    {name: "Borówki"},
  ]

  sectors: Sector[] = [
    {sector: "A1"}, 
    {sector: "B12"}, 
    {sector: "EZ"}, 
    {sector: "ES"}, 
    {sector: "C3"}, 
  ]

  chests: Chest[] = [
    {name: "8x250"},
    {name: "16x250"},
    {name: "8x500"},
    {name: "10x200"},
    {name: "20x100"},
  ]

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
          
          const newRaport = value as RaportDetails; 
          this.raportService.createRaport(newRaport).subscribe(x=> {
            this.router.navigate(['/raport',x]);
          })
      
      console.log("Dodano raport");
      } else{
        console.log("Nie udało się dodać raportu")
      };
  }
  
}

