import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { ChartsModule } from 'ng2-charts';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './user/sidenav/sidenav.component';
import { NewReportComponent } from './user/reports/new-report/new-report.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PlanComponent } from './user/plan/plan.component';
import { ReportsListComponent } from './shared/Reports/reports-list/reports-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { StatisticsComponent } from './user/statistics/statistics.component';
import { LineChartComponent } from './shared/charts/line-chart/line-chart.component';
import { PieChartComponent } from './shared/charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './shared/charts/bar-chart/bar-chart.component';
import { MainStatisticsComponent } from './shared/main-statistics/main-statistics.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { PlanDetailsComponent } from './user/plan/plan-details/plan-details.component';
import { StatisticsDataComponent } from './user/statistics/statistics-data/statistics-data.component';
import { RankingComponent } from './shared/ranking/ranking.component';
import { RegisterDialogComponent } from './admin/workers/register-dialog/register-dialog.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { WorkersListComponent } from './admin/workers/workers-list/workers-list.component';
import { WorkersComponent } from './admin/workers/workers.component';
import { DeleteDialogComponent } from './admin/workers/delete-dialog/delete-dialog.component';
import { EditDialogComponent } from './admin/workers/edit-dialog/edit-dialog.component';
import { WorkPlanComponent } from './admin/work-plan/work-plan.component';
import { SetPlanDialogComponent } from './admin/work-plan/set-plan-dialog/set-plan-dialog.component';
import { AdminStatisticsComponent } from './admin/admin-statistics/admin-statistics.component';
import { SelectWorkerDialogComponent } from './admin/admin-statistics/select-worker-dialog/select-worker-dialog.component';
import { UserMessagesComponent } from './user/user-messages/user-messages.component';
import { UserNewMessageDialogComponent } from './user/user-messages/user-new-message-dialog/user-new-message-dialog.component';
import { AdminReportsComponent } from './admin/admin-reports/admin-reports.component';
import { ReportDialogComponent } from './shared/Reports/report-dialog/report-dialog.component';
import { AdminMessagesComponent } from './admin/admin-messages/admin-messages.component';
import { NewMessageDialogComponent } from './admin/admin-messages/new-message-dialog/new-message-dialog.component';
import { NewMessageToAllDialogComponent } from './admin/admin-messages/new-message-to-all-dialog/new-message-to-all-dialog.component';
import { MessageDialogComponent } from './shared/messages/message-dialog/message-dialog.component';
import { MessageComponent } from './shared/messages/message-list/message-list.component';
import { SettingsDialogComponent } from './shared/settings-dialog/settings-dialog.component';
import { RankingListComponent } from './shared/ranking/ranking-list/ranking-list.component';
import { DeletePlanDialogComponent } from './admin/work-plan/delete-plan-dialog/delete-plan-dialog.component';
import { SectorsComponent } from './admin/sectors/sectors.component';
import { AddSectorDialogComponent } from './admin/sectors/add-sector-dialog/add-sector-dialog.component';
import { DeleteSectorDialogComponent } from './admin/sectors/delete-sector-dialog/delete-sector-dialog.component';
import { EditSectorDialogComponent } from './admin/sectors/edit-sector-dialog/edit-sector-dialog.component';
import { SectorsListComponent } from './admin/sectors/sectors-list/sectors-list.component';
import { UserReportsListComponent } from './user/reports/user-reports-list/user-reports-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NewReportComponent,
    PlanComponent,
    ReportsListComponent,
    LoginComponent,
    StatisticsComponent,
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
    MainStatisticsComponent,
    DashboardComponent,
    PlanDetailsComponent,
    StatisticsDataComponent,
    RankingComponent,
    RegisterDialogComponent,
    AdminPanelComponent,
    AdminDashboardComponent,
    WorkersListComponent,
    WorkersComponent,
    DeleteDialogComponent,
    EditDialogComponent,
    WorkPlanComponent,
    SetPlanDialogComponent,
    AdminStatisticsComponent,
    SelectWorkerDialogComponent,
    NewMessageDialogComponent,
    NewMessageToAllDialogComponent,
    MessageDialogComponent,
    UserMessagesComponent,
    UserNewMessageDialogComponent,
    AdminReportsComponent,
    ReportDialogComponent,
    MessageComponent,
    AdminMessagesComponent,
    SettingsDialogComponent,
    RankingListComponent,
    DeletePlanDialogComponent,
    SectorsComponent,
    AddSectorDialogComponent,
    DeleteSectorDialogComponent,
    EditSectorDialogComponent,
    SectorsListComponent,
    UserReportsListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatButtonModule,
    MatTableModule,
    ChartsModule,
    MatCheckboxModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [
    MatDatepickerModule, 
    {provide: MAT_DATE_LOCALE, useValue: 'pl-PL'},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
