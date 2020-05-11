import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sector } from '../admin/sectors/sector';

@Injectable({
  providedIn: 'root'
})
export class SectorsService {

  constructor(private http: HttpClient) { }

  getSectorsAmount(): Observable<number>{
    return this.http.get<number>('https://localhost:5001/api/sectors/getSectorsNumber');
  }

  getSectorsList(): Observable<Sector[]>{
    return this.http.get<Sector[]>('https://localhost:5001/api/sectors/getSectorsList');
  }

  addSector(newSector: Sector): Observable<boolean>{
    return this.http.post<boolean>('https://localhost:5001/api/sectors/addSector', newSector);
  }

  deleteSector(id): Observable<boolean>{
    return this.http.delete<boolean>(`https://localhost:5001/api/sectors/deleteSector/${id}`);
  }

  editSector(newData: Sector): Observable<boolean>{
    return this.http.post<boolean>('https://localhost:5001/api/sectors/editSector', newData);
  }
}
