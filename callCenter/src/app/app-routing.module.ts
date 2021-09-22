import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { HomeComponent } from './core/home/home.component';
import { NewentryComponent } from './core/newentry/newentry.component';
import { ReportsComponent } from './core/reports/reports.component';
import { SearchComponent } from './core/search/search.component';
import { StatusupdateComponent } from './core/statusupdate/statusupdate.component';
import { NotificationsComponent } from './user/notifications/notifications.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SplashComponent } from './user/splash/splash.component';

const routes: Routes = [
  {path:""  , component:SplashComponent},
  {path:"home" , component:HomeComponent},
  {path:"dashboard" , component:DashboardComponent},
  {path:"newentry" , component:NewentryComponent},
  {path:"statusupdate" , component:StatusupdateComponent},
  {path:"reports" , component:ReportsComponent},
  {path:"search" , component:SearchComponent},
  {path:"notifications" , component:NotificationsComponent},
  {path:"profile" , component:ProfileComponent},
  {path:"splash" , component:SplashComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
