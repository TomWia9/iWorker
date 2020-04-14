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
import { ChartsModule } from 'ng2-charts';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './user/sidenav/sidenav.component';
import { NewRaportComponent } from './user/raports/new-raport/new-raport.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlanComponent } from './user/plan/plan.component';
import { RaportsListComponent } from './user/raports/raports-list/raports-list.component';
import { RaportDetailsComponent } from './user/raports/raport-details/raport-details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { StatisticsComponent } from './user/statistics/statistics.component';
import { LineChartComponent } from './user/statistics/charts/line-chart/line-chart.component';
import { PieChartComponent } from './user/statistics/charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './user/statistics/charts/bar-chart/bar-chart.component';
import { MainStatisticsComponent } from './user/statistics/main-statistics/main-statistics.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { PlanDetailsComponent } from './user/plan/plan-details/plan-details.component';
import { StatisticsDataComponent } from './user/statistics/statistics-data/statistics-data.component';
import { RankingComponent } from './user/statistics/ranking/ranking.component';
import { RegisterDialogComponent } from './admin/register-dailog/register-dialog.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { WorkersListComponent } from './admin/workers/workers-list/workers-list.component';
import { WorkersComponent } from './admin/workers/workers.component';
import { DeleteDialogComponent } from './admin/workers/delete-dialog/delete-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NewRaportComponent,
    PlanComponent,
    RaportsListComponent,
    RaportDetailsComponent,
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
    MatCheckboxModule
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
