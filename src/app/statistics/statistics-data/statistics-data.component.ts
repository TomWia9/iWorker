import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-statistics-data',
  templateUrl: './statistics-data.component.html',
  styleUrls: ['./statistics-data.component.css']
})
export class StatisticsDataComponent implements OnInit {
  name: string = 'TEST';
  form: FormGroup;

  SAMPLE_LINE_CHART_DATA: any[] = [
    { data: [31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], label: 'Pozycja w rankingu', pointRadius: 8},
    
    ];
    
   SAMPLE_LABELS: string[] = ['01.03.20','02.03.20','03.03.20','04.03.20','05.03.20','06.03.20','07.03.20','08.03.20','09.03.20','10.03.20','11.03.20','12.03.20','13.03.20','14.03.20','15.03.20','16.03.20','17.03.20','18.03.20','19.03.20','20.03.20','21.03.20','22.03.20','23.03.20', '24.03.20', '25.03.20', '26.03.20', '27.03.20', '28.03.20', '29.03.20', '30.03.20', '31.03.20'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      max: '3',
      total: '23',
      min: '65',
      avg: '20',
      avgMonth: '17',
      avgWeek: '22'
    })
  }

}
