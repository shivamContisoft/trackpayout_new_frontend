import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogRoutingModule } from './log-routing.module';
import { LogComponent } from './log/log.component';
import { LogbyuserComponent } from './logbyuser/logbyuser.component';



@NgModule({
  declarations: [
    LogComponent,
    LogbyuserComponent
  ],
  imports: [
    CommonModule,
    LogRoutingModule
  ]
})
export class LogModule { }
