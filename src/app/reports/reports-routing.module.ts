import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupsComponent } from './groups/groups.component';
import { RouterModule, Routes } from '@angular/router';
import { SaleComponent } from './sale/sale.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { CreditnoteComponent } from './creditnote/creditnote.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PaymentComponent } from './payment/payment.component';
import { DebitnoteComponent } from './debitnote/debitnote.component';
import { JournalComponent } from './journal/journal.component';
import { BillComponent } from './bill/bill.component';





const routes: Routes = [

  {
    path:'',
    redirectTo:'reports',
    pathMatch:'full'
  },
  
  {
    path:'groups',
    component: GroupsComponent
  },
  {
    path:'sale',
    component: SaleComponent
  },
  {
    path:'receipt',
    component: ReceiptComponent
  },
  {
    path:'creditnote',
    component: CreditnoteComponent
  },
  {
    path:'purchase',
    component: PurchaseComponent
  },
  {
    path:'payment',
    component: PaymentComponent
  },
  {
    path:'debit',
    component: DebitnoteComponent
  },
  {
    path:'journal',
    component: JournalComponent
  },
  {
    path:'bill',
    component: BillComponent
  }



];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
