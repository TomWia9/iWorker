import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-statistics-data',
  templateUrl: './statistics-data.component.html',
  styleUrls: ['./statistics-data.component.css']
})
export class StatisticsDataComponent implements OnInit {
  form: FormGroup;
  userID: number;
  id: number;
  statisticsData;

  chartData: any[] = [
    { data: [31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1], label: 'Pozycja w rankingu', pointRadius: 8},
    
    ];
    
   chartLabels: string[] = ['01.03.20','02.03.20','03.03.20','04.03.20','05.03.20','06.03.20','07.03.20','08.03.20','09.03.20','10.03.20','11.03.20','12.03.20','13.03.20','14.03.20','15.03.20','16.03.20','17.03.20','18.03.20','19.03.20','20.03.20','21.03.20','22.03.20','23.03.20', '24.03.20', '25.03.20', '26.03.20', '27.03.20', '28.03.20', '29.03.20', '30.03.20', '31.03.20'];

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id; //1 - ranking, 2 - amount, 3 - hours
    console.log(this.id);

      // this.statisticsData = this.statisticsService.getDataStatistics(this.userID).subscribe(x  => {
      //   this.statisticsData = x; 
      // });

      // this.chartData = this.statisticsService.getMonthChartData(this.userID, this.id).subscribe(x  => {
      //   this.chartData = x; 
      // });

      // this.chartLabels = this.statisticsService.getMonthChartLabels(this.userID, this.id).subscribe(x  => {
      //   this.chartLabels = x; 
      // });

      // this.form = this.fb.group({
      //   max: this.statisticsData.max,
      //   total: this.statisticsData.total,
      //   min: this.statisticsData.min,
      //   avg: this.statisticsData.avg,
      //   avgMonth: this.statisticsData.avgMonth,
      //   avgWeek: this.statisticsData.avgWeek,
      // })

    this.form = this.fb.group({
      max: '3',
      total: '23',
      min: '65',
      avg: '20',
      avgMonth: '17',
      avgWeek: '22'
    })
  }

}
