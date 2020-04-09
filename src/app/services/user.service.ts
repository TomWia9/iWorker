import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  userInfo: User;

  register(newUser: User): Observable<any>{
    return this.http.post<any>('https://localhost:5001/api/register', newUser);
  }

    login(user: User): Observable<any>{
      return this.http.post<any>('https://localhost:5001/api/login', user);
  }

    setUser(user: User): void{
      this.userInfo = user;
    }


}
