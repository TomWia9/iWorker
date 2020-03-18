import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NewRaportComponent } from './raports/new-raport/new-raport.component';
import { PlanComponent } from './plan/plan.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: SidenavComponent,
        children: [
          // {path: '', component: DashboardComponent},
          {path: 'new-raport', component: NewRaportComponent},
          {path: 'plan', component: PlanComponent},
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
