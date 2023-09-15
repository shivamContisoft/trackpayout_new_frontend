import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillComponent } from './bill/bill.component';
import { CreditnoteComponent } from './creditnote/creditnote.component';
import { DebitnoteComponent } from './debitnote/debitnote.component';
import { GroupsComponent } from './groups/groups.component';
import { SaleComponent } from './sale/sale.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PaymentComponent } from './payment/payment.component';
import { JournalComponent } from './journal/journal.component';
import { AgeingComponent } from './ageing/ageing.component';
import { ReportsRoutingModule } from './reports-routing.module';



@NgModule({
  declarations: [
    BillComponent,
    CreditnoteComponent,
    DebitnoteComponent,
    GroupsComponent,
    SaleComponent,
    ReceiptComponent,
    PurchaseComponent,
    PaymentComponent,
    JournalComponent,
    AgeingComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
