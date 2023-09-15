import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrmRoutingModule } from './crm-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesExecutiveComponent } from './sales-executive/sales-executive.component';
import { LeadsComponent } from './leads/leads.component';
import { QuotationComponent } from './quotation/quotation.component';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [
    DashboardComponent,
    SalesExecutiveComponent,
    LeadsComponent,
    QuotationComponent
  ],
  imports: [
    CommonModule,
    CrmRoutingModule,
    NgApexchartsModule,
  ]
})
export class CrmModule { }
