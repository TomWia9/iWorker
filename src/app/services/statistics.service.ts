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

  getChartData(userID, period, chartID): Observable<any[]>{
    return this.http.get<any[]>(`https://localhost:5001/api/statistics/week/getLineChartData/${userID}/${period}/${chartID}`);
  }

  getChartLabels(userID, period, chartID): Observable<string[]>{
    return this.http.get<string[]>(`https://localhost:5001/api/statistics/week/getChartLabels/${userID}/${period}/${chartID}`);
  }

  //test funcs
  // getChartData(userID, period, chartID): number[]{
  //   switch(+chartID){
  //     case 1: {return [31,30,29,28,27,26,25];}
  //     case 2: {return [432, 543, 342, 111];}
  //     case 3: {return [8,12,10,12,8,8,8.5];}
  //   }
  // }

  // getChartLabels(userID, period, chartID): string[]{
  //   switch(+chartID){
  //     case 1: {return ['01.03.20','02.03.20','03.03.20','04.03.20','05.03.20','06.03.20','07.03.20'];}
  //     case 2: {return ['Maliny', 'Truskawki', 'Jerzyny', 'Borówki' ];}
  //     case 3: { return ['01.03.20','02.03.20','03.03.20','04.03.20','05.03.20','06.03.20','07.03.20'];}
  //   }
 //}


  //Statistics in statisticsDataComponent
  getDataStatistics(userID): Observable<StatisticsData>{
    return this.http.get<StatisticsData>(`https://localhost:5001/api/statistics/GetDataStatistics/${userID}`);
  }

}
