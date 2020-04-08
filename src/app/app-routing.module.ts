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
import { StatisticsDataComponent } from './statistics/statistics-data/statistics-data.component';
import { RankingComponent } from './statistics/ranking/ranking.component';

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
          {path:'statistics/data/:id', component: StatisticsDataComponent},
          {path:'statistics/ranking', component: RankingComponent},
         
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
