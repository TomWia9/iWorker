import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkersList } from '../admin/workers/workers-list/workers-list';
import { SelectionModel } from '@angular/cdk/collections';
import { Register } from '../admin/workers/register-dialog/register';
import { NewPassword } from '../shared/settings-dialog/newPassword';

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

  deleteWorker(userID): Observable<boolean>{
    return this.http.delete<boolean>(`https://localhost:5001/api/workers/deleteWorker/${userID}`);
  }

  editWorker(userID, newData: WorkersList): Observable<boolean>{
    return this.http.post<boolean>(`https://localhost:5001/api/workers/editWorker/${userID}`, newData);
  }

  changePassword(newPassword: NewPassword){
    return this.http.post<boolean>('https://localhost:5001/api/workers/changePassword', newPassword);
  }
}
