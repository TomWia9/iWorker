import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportDetails } from '../user/reports/report-details/reportDetails';
import { Report } from '../user/reports/report';
import { AllReports } from '../shared/allReports';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getDetails(userID, id): Observable<ReportDetails>{
    return this.http.get<ReportDetails>(`https://localhost:5001/api/report/${userID}/${id}`);
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

  getReportsList(userID): Observable<Report[]>{
    return this.http.get<Report[]>(`https://localhost:5001/api/report/${userID}`);
  }

  getAllReportsList(peroid): Observable<AllReports[]>{
    return this.http.get<AllReports[]>(`https://localhost:5001/api/report/getAllReportsList/${peroid}`);
  }

}
