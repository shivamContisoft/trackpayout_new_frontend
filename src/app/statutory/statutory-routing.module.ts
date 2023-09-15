import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsmeComponent } from './msme/msme.component';
import { GstComponent } from './gst/gst.component';
import { RouterModule, Routes } from '@angular/router';




const routes: Routes = [

  {
    path:'',
    redirectTo:'statutory',
    pathMatch:'full'
  },
  {
    path:'msme',
    component: MsmeComponent
  },
  {
    path:'gst',
    component: GstComponent
  }
  
 

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatutoryRoutingModule { }
