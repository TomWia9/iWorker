import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkersList } from '../admin/workers/workers-list/workers-list';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor(private http: HttpClient) { }

  getWorkersList(): Observable<WorkersList[]>{
    return this.http.get<WorkersList[]>('https://localhost:5001/api/workers/getWorkersList');
  }

  getWorkersAmount(): Observable<number>{
    return this.http.get<number>('https://localhost:5001/api/workers/getWorkersNumber');
  }
}
