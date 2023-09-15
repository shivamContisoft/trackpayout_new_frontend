import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardComponent } from './standard/standard.component';
import { AmountComponent } from './amount/amount.component';
import { LedgerComponent } from './ledger/ledger.component';
import { StockItemComponent } from './stock-item/stock-item.component';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    StandardComponent,
    AmountComponent,
    LedgerComponent,
    StockItemComponent,
    MonthlyReportComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule
  ]
})
export class DashboardModule { }
