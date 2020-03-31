import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NewRaportComponent } from './raports/new-raport/new-raport.component';
import { PlanComponent } from './plan/plan.component';
import { RaportsListComponent } from './raports/raports-list/raports-list.component';
import { RaportDetailsComponent } from './raports/raport-details/raport-details.component';
import { LoginComponent } from './login/login.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RankingStatisticsComponent } from './statistics/ranking-statistics/ranking-statistics.component';
import { HoursStatisticsComponent } from './statistics/hours-statistics/hours-statistics.component';
import { AmountStatisticsComponent } from './statistics/amount-statistics/amount-statistics.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: SidenavComponent,
        children: [
          {path: '', component: DashboardComponent},
          {path: 'new-raport', component: NewRaportComponent},
          {path: 'plan', component: PlanComponent},
          {path: 'raports-list', component: RaportsListComponent},
          {path: 'raport/:id', component: RaportDetailsComponent},
          {path: 'statistics', component: StatisticsComponent},
          {path:'statistics/ranking', component: RankingStatisticsComponent},
          {path:'statistics/amount', component: AmountStatisticsComponent},
          {path:'statistics/hours', component: HoursStatisticsComponent},
        ]
      },
      {path: 'login', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
