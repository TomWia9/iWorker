import { Injectable } from '@angular/core';
import { PlanDetails } from '../user/plan/planDetails';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from '../admin/work-plan/plan';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http: HttpClient) { }

  getPlanDetails(userID, date: Date): Observable<PlanDetails>{
    return this.http.get<PlanDetails>(`https://localhost:5001/api/plan/${userID}/${date}`);
  }

  newPlan(plan: Plan): Observable<boolean>{
    return this.http.post<boolean>('https://localhost:5001/api/plan/newPlan', plan);
  }
}
