import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LedgerstatementRoutingModule } from './ledgerstatement-routing.module';
import { SundrydebtorComponent } from './sundrydebtor/sundrydebtor.component';
import { SundrycreditorComponent } from './sundrycreditor/sundrycreditor.component';



@NgModule({
  declarations: [
    SundrydebtorComponent,
    SundrycreditorComponent
  ],
  imports: [
    CommonModule,
    LedgerstatementRoutingModule
  ]
})
export class LedgerstatementModule { }
