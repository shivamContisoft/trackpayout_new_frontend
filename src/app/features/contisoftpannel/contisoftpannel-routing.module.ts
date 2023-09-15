import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { CompaniesComponent } from './companies/companies.component';

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
    path:'subscriptions',
    component: SubscriptionsComponent
  },
  {
    path: 'companies',
    component: CompaniesComponent
  }

];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContisoftpannelRoutingModule { }
