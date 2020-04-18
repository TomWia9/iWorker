import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Statistics } from '../user/statistics/statistics';
import { Observable } from 'rxjs';
import { StatisticsData } from '../user/statistics/statistics-data/statisticsData';
import { chartLabelsItem } from '../user/statistics/chartLabelsItem';
import { ChartDataItem } from '../user/statistics/chartDataItem';
import { Ranking } from '../shared/ranking/ranking';
import { WorkersList } from '../admin/workers/workers-list/workers-list';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }

  //Statistics in statisticsComponent
  getMainStatistics(userID, date): Observable<Statistics>{
    return this.http.get<Statistics>(`https://localhost:5001/api/statistics/getMainStatistics/${userID}/${date}`);
  }

  //charts
  getChartData(userID, period, chartID): Observable<number[]>{
    return this.http.get<number[]>(`https://localhost:5001/api/statistics/getChartData/${userID}/${period}/${chartID}`);
  }

  getChartLabels(userID, period, chartID): Observable<string[]>{
    return this.http.get<string[]>(`https://localhost:5001/api/statistics/getChartLabels/${userID}/${period}/${chartID}`);
  }

  //Statistics in statisticsDataComponent
  getDataStatistics(userID, statsID): Observable<StatisticsData>{
    return this.http.get<StatisticsData>(`https://localhost:5001/api/statistics/GetDataStatistics/${userID}/${statsID}`);
  }

  getRanking(date): Observable<Ranking[]>{
    return this.http.get<Ranking[]>(`https://localhost:5001/api/statistics/GetRanking/${date}`)
  }

  getTop3(): Observable<Ranking[]>{
    return this.http.get<Ranking[]>(`https://localhost:5001/api/statistics/getTop3`);
  }

  getTotalChartLabels(): Observable<string[]>{
    return this.http.get<string[]>(`https://localhost:5001/api/statistics/getTotalChartLabels`);
  }

  getTotalChartData(): Observable<number[]>{
    return this.http.get<number[]>(`https://localhost:5001/api/statistics/getTotalChartData`);
  }

}
