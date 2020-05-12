import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RaportDetails } from '../user/raports/raport-details/raportDetails';
import { RaportList } from '../user/raports/RaportList';
import { AllRaports } from '../shared/allRaports';

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
      sector: newRaport.sector,
      amount: newRaport.amount,
      hours: newRaport.hours,
      date: newRaport.date,
    })
  }

  getRaportsList(userID): Observable<RaportList[]>{
    return this.http.get<RaportList[]>(`https://localhost:5001/api/raport/${userID}`);
  }

  getAllRaportsList(peroid): Observable<AllRaports[]>{
    return this.http.get<AllRaports[]>(`https://localhost:5001/api/raport/getAllRaportsList/${peroid}`);
  }

}
