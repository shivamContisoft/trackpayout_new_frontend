import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadReportComponent } from './lead-report/lead-report.component';
import { SaleReportComponent } from './sale-report/sale-report.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  // {
  //   path:'',
  //   redirectTo:'sundrydebtor',
  //   pathMatch:'full'
  // },


  {
    path:'lead-report',
    component: LeadReportComponent
  },
  {
    path:'sale-report',
    component: SaleReportComponent
  }
  

  

];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReportsRoutingModule { }
