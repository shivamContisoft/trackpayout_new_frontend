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
import { RouterModule, Routes } from '@angular/router';
// import { ReportsRoutingModule } from './reports-routing.module';





const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'dashboard',
  //   pathMatch:'full'
  // },
  {
    path:'',
    redirectTo:'ledger-statement',
    pathMatch:'full'
  },

  {
    path: 'ledger-statement',
    loadChildren: () => import('./ledger-statement/ledger-statement.module').then(module => module.LedgerStatementModule)
  },

  // {
  //   path: 'byduedays',
  //   loadChildren: () => import('./byduedays/byduedays.module').then(module => module.ByduedaysModule)
  // },
  {
    path: 'byduedays',
    loadChildren: () => import('./byduedays/byduedays.module').then(module => module.ByduedaysModule)
  },

  {
    path:'bill',
    component:BillComponent
  },

  {
    path:'creditnote',
    component:CreditnoteComponent
  },
  {
    path:'debitnote',
    component:DebitnoteComponent
  },
  {
    path:'groups',
    component:GroupsComponent
  },
  {
    path:'sale',
    component:SaleComponent
  },
  {
    path:'receipt',
    component:ReceiptComponent 
  },
  {
    path:'purchase',
    component:PurchaseComponent
  },
  {
    path:'payment',
    component:PaymentComponent
  },
  {
    path:'journal',
    component:JournalComponent
  },
  {
    path:'ageing',
    component:AgeingComponent
  },
  
  
  


];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})



export class ReportsRoutingModule { }
