import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedgerStatementRoutingModule } from './ledger-statement-routing.module';
import { SundrydebtorComponent } from './sundrydebtor/sundrydebtor.component';
import { SundrycreditorComponent } from './sundrycreditor/sundrycreditor.component';



@NgModule({
  declarations: [
    SundrydebtorComponent,
    SundrycreditorComponent
  ],
  imports: [
    CommonModule,
    LedgerStatementRoutingModule
  ]
})
export class LedgerStatementModule { }
