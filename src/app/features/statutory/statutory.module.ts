import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatutoryRoutingModule } from './statutory-routing.module';
import { MsmeComponent } from './msme/msme.component';
import { GstComponent } from './gst/gst.component';



@NgModule({
  declarations: [
    MsmeComponent,
    GstComponent
  ],
  imports: [
    CommonModule,
    StatutoryRoutingModule
  ]
})
export class StatutoryModule { }
