import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RaportDetails } from '../raports/raport-details/raportDetails';

@Injectable({
  providedIn: 'root'
})
export class RaportService {

  constructor(private http: HttpClient) { }

  getDetails(id): Observable<RaportDetails>{
    return this.http.get<RaportDetails>(`https://localhost:5001/api/raport/${id}}`);
  }

  createRaport(newRaport: RaportDetails): Observable<Number>{
    return this.http.post<number>('https://localhost:50011/api/raport', 
    {
      id: newRaport.id,
      name: newRaport.name,
      surname: newRaport.surname,
      workName: newRaport.workName,
      sector: newRaport.sector,
      amount: newRaport.amount,
      hours: newRaport.hours,
      date: newRaport.date,
      chests: newRaport.chests

    })
  }
}
