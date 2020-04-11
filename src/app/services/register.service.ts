import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../admin/register/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(newUser: Register): Observable<boolean>{
    return this.http.post<boolean>('https://localhost:5001/api/register', newUser);
  }

}
