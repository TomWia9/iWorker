import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/user';
import { NewPassword } from '../shared/settings-dialog/newPassword';
import { Register } from '../shared/register';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  register(newUser: Register): Observable<boolean>{
    return this.http.post<boolean>('https://localhost:5001/api/register', newUser);
  }

  getWorkersList(): Observable<User[]>{
    return this.http.get<User[]>('https://localhost:5001/api/users/getWorkersList');
  }

  getWorkersNumber(): Observable<number>{
    return this.http.get<number>('https://localhost:5001/api/users/getWorkersNumber');
  }

  deleteWorker(userID): Observable<boolean>{
    return this.http.delete<boolean>(`https://localhost:5001/api/users/deleteWorker/${userID}`);
  }

  editWorker(userID, newData: User): Observable<boolean>{
    return this.http.post<boolean>(`https://localhost:5001/api/users/editWorker/${userID}`, newData);
  }

  changePassword(newPassword: NewPassword){
    return this.http.post<boolean>('https://localhost:5001/api/users/changePassword', newPassword);
  }
}
