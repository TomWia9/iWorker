import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Statistics } from '../statistics/statistics';
import { Observable } from 'rxjs';
import { StatisticsData } from '../statistics/statistics-data/statisticsData';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }

  //Statistics in statisticsComponent
  getMainStatistics(userID): Observable<Statistics>{
    return this.http.get<Statistics>(`https://localhost:5001/api/statistics/getMainStatistics/${userID}`);
  }

  //charts in mainStatisticsComponent
  getLineChartData(userID): Observable<any[]>{
    return this.http.get<any[]>(`https://localhost:5001/api/statistics/week/getLineChartData/${userID}`);
  }

  //for both, line and bar charts
  getChartLabels(userID): Observable<string[]>{
    return this.http.get<string[]>(`https://localhost:5001/api/statistics/week/getChartLabels/${userID}`);
  }

  getBarChartData(userID): Observable<any[]>{
    return this.http.get<any[]>(`https://localhost:5001/api/statistics/week/getBarChartData/${userID}`);
  }

  getPieChartData(userID): Observable<number[]>{
    return this.http.get<number[]>(`https://localhost:5001/api/statistics/week/getPieChartData/${userID}`);
  }

  getPieChartLabels(userID): Observable<string[]>{
    return this.http.get<string[]>(`https://localhost:5001/api/statistics/week/getPieChartLabels/${userID}`);
  }

  //Statistics in statisticsDataComponent
  getDataStatistics(userID): Observable<StatisticsData>{
    return this.http.get<StatisticsData>(`https://localhost:5001/api/statistics/GetDataStatistics/${userID}`);
  }

  getMonthChartData(userID, id): Observable<any[]>{
    return this.http.get<any[]>(`https://localhost:5001/api/statistics/month/getMonthChartData/${userID}/${id}`);
  }

  getMonthChartLabels(userID, id): Observable<string[]>{
    return this.http.get<string[]>(`https://localhost:5001/api/statistics/week/getMonthChartLabels/${userID}/${id}`);
  }



}
