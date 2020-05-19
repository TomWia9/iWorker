import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SidenavComponent } from './user/sidenav/sidenav.component';
import { NewReportComponent } from './user/reports/new-report/new-report.component';
import { PlanComponent } from './user/plan/plan.component';
import { ReportsListComponent } from './user/reports/reports-list/reports-list.component';
import { ReportDetailsComponent } from './user/reports/report-details/report-details.component';
import { LoginComponent } from './login/login.component';
import { StatisticsComponent } from './user/statistics/statistics.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { StatisticsDataComponent } from './user/statistics/statistics-data/statistics-data.component';
import { RankingComponent } from './shared/ranking/ranking.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { WorkersComponent } from './admin/workers/workers.component';
import { WorkPlanComponent } from './admin/work-plan/work-plan.component';
import { AdminStatisticsComponent } from './admin/admin-statistics/admin-statistics.component';
import { UserMessagesComponent } from './user/user-messages/user-messages.component';
import { AdminReportsComponent } from './admin/admin-reports/admin-reports.component';
import { AdminMessagesComponent } from './admin/admin-messages/admin-messages.component';
import { SectorsComponent } from './admin/sectors/sectors.component';

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
          {path: 'new-report', component: NewReportComponent},
          {path: 'plan', component: PlanComponent},
          {path: 'reports-list', component: ReportsListComponent},
          {path: 'report/:id', component: ReportDetailsComponent},
          {path: 'statistics', component: StatisticsComponent},
          {path:'statistics/data/:id', component: StatisticsDataComponent},
          {path:'ranking', component: RankingComponent},
          {path:'messages', component: UserMessagesComponent},
        ]
      },
      {path: 'login', component: LoginComponent, },
     

      {path: 'admin',
       component: AdminPanelComponent,
        canActivate: [AdminGuard],
        children: [
          {path: '', component: AdminDashboardComponent},
          {path: 'messages', component: AdminMessagesComponent},
          {path: 'workers', component: WorkersComponent},
          {path: 'plan', component: WorkPlanComponent},
          {path: 'sectors', component: SectorsComponent},
          {path: 'statistics', component: AdminStatisticsComponent},
          {path:'ranking', component: RankingComponent},
          {path:'reports', component: AdminReportsComponent},
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
