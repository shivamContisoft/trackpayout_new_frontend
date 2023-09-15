import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SundrydebtorComponent } from './sundrydebtor/sundrydebtor.component';
import { SundrycreditorComponent } from './sundrycreditor/sundrycreditor.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  {
    path:'',
    redirectTo:'byduedays',
    pathMatch:'full'
  },

  {
    path:'sundrydebtor',
    component: SundrydebtorComponent
  },
  {
    path:'sundrycreditor',
    component: SundrycreditorComponent
  }
  



];



@NgModule({
  declarations: [],
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ByduedaysRoutingModule { }
