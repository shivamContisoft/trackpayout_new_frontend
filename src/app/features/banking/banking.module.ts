import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankingRoutingModule } from './banking-routing.module';
import { CustomerStatementComponent } from './customer-statement/customer-statement.component';
import { DpcalculatorComponent } from './dpcalculator/dpcalculator.component';



@NgModule({
  declarations: [
    CustomerStatementComponent,
    DpcalculatorComponent
  ],
  imports: [
    CommonModule,
    BankingRoutingModule
  ]
})
export class BankingModule { }
