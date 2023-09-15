import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LedgerComponent } from './ledger/ledger.component';
import { StockItemComponent } from './stock-item/stock-item.component';
import { AmountComponent } from './amount/amount.component';
import { StockSummaryComponent } from './stock-summary/stock-summary.component';
import { AgeingComponent } from './ageing/ageing.component';
import { LegalSupportComponent } from './legal-support/legal-support.component';
import { TaskComponent } from './task/task.component';
import { BillDiscountComponent } from './bill-discount/bill-discount.component';
import { ClientComponent } from './client/client.component';
import { FollowupComponent } from './followup/followup.component';
import { LandingComponent } from './landing/landing.component';






const routes: Routes = [
  
  // {
  //   path:'',
  //   redirectTo:'features',
  //   pathMatch:'full'
  // },
  
  // {
  //   path:'dashboard',
  //   component:LandingComponent,
  //   loadChildren: () => import('./dashboard/dashboard.module').then((module) => module.DashboardModule)
  // },

  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  

  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
  },

  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then(module => module.ReportsModule)
  },

  {
    path: 'statutory',
    loadChildren: () => import('./statutory/statutory.module').then(module => module.StatutoryModule)
  },
  {
    path: 'contisoftpannel',
    loadChildren: () => import('./contisoftpannel/contisoftpannel.module').then(module => module.ContisoftpannelModule)
  },

  {
    path: 'administrator',
    loadChildren: () => import('./administrator/administrator.module').then(module => module.AdministratorModule)
  },
  {
    path: 'log',
    loadChildren: () => import('./log/log.module').then(module => module.LogModule)
  },
  {
    path: 'banking',
    loadChildren: () => import('./banking/banking.module').then(module => module.BankingModule)
  },
  {
    path: 'crm',
    loadChildren: () => import('./crm/crm.module').then(module => module.CrmModule)
  },
  


  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'ledger',
    component: LedgerComponent
  },
  {
    path:'stock-item',
    component: StockItemComponent
  },
  {
    path:'amount',
    component: AmountComponent
  },
  {
    path:'stock-summary',
    component: StockSummaryComponent
  },
  {
    path:'ageing',
    component: AgeingComponent
  },
  {
    path:'legal-support',
    component: LegalSupportComponent
  },
  {
    path:'task',
    component: TaskComponent
  },
  {
    path:'bill-discount',
    component: BillDiscountComponent
  },
  {
    path:'client',
    component: ClientComponent
  },
  {
    path:'followup',
    component: FollowupComponent
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
