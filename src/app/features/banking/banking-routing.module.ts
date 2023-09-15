import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomerStatementComponent } from './customer-statement/customer-statement.component';
import { DpcalculatorComponent } from './dpcalculator/dpcalculator.component';

const routes: Routes = [

  // {
  //   path:'',
  //   redirectTo:'sundrydebtor',
  //   pathMatch:'full'
  // },

  {
    path:'customer-statement',
    component: CustomerStatementComponent
  },
  {
    path:'dpcalculator',
    component: DpcalculatorComponent
  
  }

];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankingRoutingModule { }
