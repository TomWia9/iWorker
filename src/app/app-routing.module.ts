import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SidenavComponent } from './user/sidenav/sidenav.component';
import { NewRaportComponent } from './user/raports/new-raport/new-raport.component';
import { PlanComponent } from './user/plan/plan.component';
import { RaportsListComponent } from './user/raports/raports-list/raports-list.component';
import { RaportDetailsComponent } from './user/raports/raport-details/raport-details.component';
import { LoginComponent } from './login/login.component';
import { StatisticsComponent } from './user/statistics/statistics.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { StatisticsDataComponent } from './user/statistics/statistics-data/statistics-data.component';
import { RankingComponent } from './user/statistics/ranking/ranking.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { WorkersComponent } from './admin/workers/workers.component';
import { WorkPlanComponent } from './admin/work-plan/work-plan.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: SidenavComponent,
        canActivate: [AuthGuard],
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
      {path: 'login', component: LoginComponent, },

      {path: 'admin',
       component: AdminPanelComponent,
        canActivate: [AdminGuard],
        children: [
          {path: '', component: AdminDashboardComponent},
          {path: 'workers', component: WorkersComponent},
          {path: 'plan', component: WorkPlanComponent},
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
