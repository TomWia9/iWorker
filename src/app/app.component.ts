import { Component } from '@angular/core';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { GuardService } from './services/guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IWorker';

    public barChartPlugins = [ChartDataLabels];

  }
