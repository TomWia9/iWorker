import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RaportDetails } from '../raports/raport-details/raportDetails';
import { RaportList } from '../raports/RaportList';

@Injectable({
  providedIn: 'root'
})
export class RaportService {

  constructor(private http: HttpClient) { }

  getDetails(userID, id): Observable<RaportDetails>{
    return this.http.get<RaportDetails>(`https://localhost:5001/api/raport/${userID}/${id}`);
  }

  createRaport(newRaport: RaportDetails): Observable<Number>{
    return this.http.post<number>('https://localhost:5001/api/raport', 
    {
      userID: newRaport.userID,
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

  getRaportsList(userID): Observable<RaportList[]>{
    return this.http.get<RaportList[]>(`https://localhost:5001/api/raport/${userID}`);
  }

}
