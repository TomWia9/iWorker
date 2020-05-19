import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Username } from '../auth/username';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private http: HttpClient) { }

  getWorkersList(userID): Observable<Username>{
    return this.http.get<Username>(`http://localhost:5001/api/user/exists/${userID}`);
  }
}
