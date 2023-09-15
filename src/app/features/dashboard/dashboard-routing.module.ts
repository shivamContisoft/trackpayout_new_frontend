import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { StandardComponent } from './standard/standard.component';
import { AmountComponent } from './amount/amount.component';
import { LedgerComponent } from './ledger/ledger.component';
import { StockItemComponent } from './stock-item/stock-item.component';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  {
    path:'',
    redirectTo:'standard',
    pathMatch:'full'
  },

  {
    path:'standard',
    component:StandardComponent
  },
  {
    path:'amount',
    component:AmountComponent
  },
  {
    path:'ledger',
    component:LedgerComponent
  },
  {
    path:'monthly-report',
    component:MonthlyReportComponent
  },
  {
    path:'stock-item',
    component:StockItemComponent
  }
  


];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
