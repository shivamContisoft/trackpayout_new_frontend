import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { LedgerComponent } from './ledger/ledger.component';
import { OnboardMastersComponent } from './onboard-masters/onboard-masters.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { CompanyComponent } from './company/company.component';
import { GeneralConfigComponent } from './general-config/general-config.component';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [

  {
    path:'',
    redirectTo:'administrator',
    pathMatch:'full'
  },

  {
    path:'user',
    component:UserComponent
  },
  {
    path:'ledger',
    component:LedgerComponent
  },
  {
    path:'onboard-masters',
    component:OnboardMastersComponent
  },
  {
    path:'bank-details',
    component:BankDetailsComponent
  },
  {
    path:'company',
    component:CompanyComponent
  },
  {
    path:'general-config',
    component:GeneralConfigComponent
  }
  


];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
