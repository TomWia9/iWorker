import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Work } from '../work';
import { Sector } from '../sector';
import { Chest } from '../chest';

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

  constructor(private fb: FormBuilder) { }

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
      console.log("Dodano raport");
      } else{
        console.log("Nie udało się dodać raportu")
      };
  }
  
}

