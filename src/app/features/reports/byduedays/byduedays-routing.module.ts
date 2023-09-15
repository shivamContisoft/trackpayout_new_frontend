import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SundrydebtorComponent } from './sundrydebtor/sundrydebtor.component';
import { SundrycreditorComponent } from './sundrycreditor/sundrycreditor.component';



const routes: Routes = [

  // {
  //   path:'',
  //   redirectTo:'sundrydebtor',
  //   pathMatch:'full'
  // },

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
