import { Injectable } from '@angular/core';
import { PlanDetails } from '../user/plan/planDetails';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from '../admin/work-plan/plan';
import { PlanDate } from '../admin/work-plan/planDate';

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

  getFullPlan(date): Observable<Plan>{
    return this.http.get<Plan>(`https://localhost:5001/api/plan/getFullPlan/${date}`);
  }

  getListOfPlanDates(): Observable<PlanDate[]>{
    return this.http.get<PlanDate[]>('https://localhost:5001/api/plan/getListOfPlanDates');
  }

  deletePlan(date): Observable<boolean>{
    return this.http.delete<boolean>(`https://localhost:5001/api/plan/deletePlan/${date}`);
  }
}
