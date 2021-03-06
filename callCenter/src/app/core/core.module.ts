import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { NewentryComponent } from './newentry/newentry.component';
import { StatusupdateComponent } from './statusupdate/statusupdate.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    ReportsComponent,
    NewentryComponent,
    StatusupdateComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
