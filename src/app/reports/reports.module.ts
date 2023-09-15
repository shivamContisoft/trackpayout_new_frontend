import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';

import { GroupsComponent } from './groups/groups.component';
import { SaleComponent } from './sale/sale.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { CreditnoteComponent } from './creditnote/creditnote.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PaymentComponent } from './payment/payment.component';
import { DebitnoteComponent } from './debitnote/debitnote.component';
import { JournalComponent } from './journal/journal.component';
import { SharedModule } from '../shared/shared.module';
import { BillComponent } from './bill/bill.component';
@NgModule({
  declarations: [
    GroupsComponent,
    SaleComponent,
    ReceiptComponent,
    CreditnoteComponent,
    PurchaseComponent,
    PaymentComponent,
    DebitnoteComponent,
    JournalComponent,
    BillComponent,
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule
  ]
})
export class ReportsModule { }
