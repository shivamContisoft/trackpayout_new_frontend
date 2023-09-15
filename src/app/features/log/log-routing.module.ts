import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from './log/log.component';
import { LogbyuserComponent } from './logbyuser/logbyuser.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  // {
  //   path:'',
  //   redirectTo:'sundrydebtor',
  //   pathMatch:'full'
  // },

  {
    path:'log',
    component: LogComponent
  },
  {
    path:'logbyuser',
    component: LogbyuserComponent
  
  }

];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule { }
