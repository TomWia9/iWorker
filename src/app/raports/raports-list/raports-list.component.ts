import { Component, OnInit } from '@angular/core';
import { RaportList} from '../RaportList';

@Component({
  selector: 'app-raports-list',
  templateUrl: './raports-list.component.html',
  styleUrls: ['./raports-list.component.css']
})
export class RaportsListComponent implements OnInit {
  raports: RaportList[] = [
    {id: 1, date: "19.03.2020", workName: "Maliny"},
    {id: 2, date: "18.03.2020", workName: "Maliny"},
    {id: 3, date: "17.03.2020", workName: "Truskawki"}
  ];
  displayedColumns = ['number', 'date', 'workName']
  constructor() { }

  ngOnInit(): void {
  }

}
