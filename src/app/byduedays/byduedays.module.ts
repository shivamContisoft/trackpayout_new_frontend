import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByduedaysRoutingModule } from './byduedays-routing.module';
import { SundrydebtorComponent } from './sundrydebtor/sundrydebtor.component';
import { SundrycreditorComponent } from './sundrycreditor/sundrycreditor.component';



@NgModule({
  declarations: [
    SundrydebtorComponent,
    SundrycreditorComponent
  ],
  imports: [
    CommonModule,
    ByduedaysRoutingModule
  ]
})
export class ByduedaysModule { }
