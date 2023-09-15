import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContisoftpannelRoutingModule } from './contisoftpannel-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { CompaniesComponent } from './companies/companies.component';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [
    DashboardComponent,
    SubscriptionsComponent,
    CompaniesComponent
  ],
  imports: [
    CommonModule,
    ContisoftpannelRoutingModule,
    NgApexchartsModule,
  ]
})
export class ContisoftpannelModule { }
