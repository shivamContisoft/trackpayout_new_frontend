import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesExecutiveComponent } from './sales-executive/sales-executive.component';
import { LeadsComponent } from './leads/leads.component';
import { QuotationComponent } from './quotation/quotation.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  // {
  //   path:'',
  //   redirectTo:'sundrydebtor',
  //   pathMatch:'full'
  // },

  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'sales-executive',
    component: SalesExecutiveComponent
  },
  {
    path: 'leads',
    component: LeadsComponent
  },
  {
    path: 'quotation',
    component: QuotationComponent
  },

  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then(module => module.ReportsModule)
  }

];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})



export class CrmRoutingModule { }
