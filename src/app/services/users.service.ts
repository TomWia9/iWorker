import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersList } from '../admin/workers/workers-list/users-list';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<UsersList[]>{
    return this.http.get<UsersList[]>('https://localhost:5001/api/users/getUsersList');
  }
}
