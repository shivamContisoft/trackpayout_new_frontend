import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadReportComponent } from './lead-report/lead-report.component';
import { SaleReportComponent } from './sale-report/sale-report.component';
import { ReportsRoutingModule } from './reports-routing.module';



@NgModule({
  declarations: [
    LeadReportComponent,
    SaleReportComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
