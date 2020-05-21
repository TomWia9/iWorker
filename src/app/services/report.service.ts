import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportDetails } from '../user/reports/new-report/reportDetails';
import { Report } from '../shared/Reports/reports-list/report';
import { AllReports } from '../shared/allReports';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getDetails(id): Observable<ReportDetails>{
    return this.http.get<ReportDetails>(`https://localhost:5001/api/report/${id}`);
  }

  createReport(newReport: ReportDetails): Observable<Number>{
    return this.http.post<number>('https://localhost:5001/api/report', 
    {
      userID: newReport.userID,
      name: newReport.name,
      surname: newReport.surname,
      sector: newReport.sector,
      amount: newReport.amount,
      hours: newReport.hours,
      date: newReport.date,
    })
  }

  getReportsList(userID, peroid): Observable<Report[]>{
    return this.http.get<Report[]>(`https://localhost:5001/api/report/getReportsList/${userID}/${peroid}`);
  }

  getAllWorkersReportsList(peroid): Observable<Report[]>{
    return this.http.get<Report[]>(`https://localhost:5001/api/report/getAllWorkersReportsList/${peroid}`);
  }

}
