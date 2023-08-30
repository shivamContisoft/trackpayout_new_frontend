import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { ThemeModule } from '../theme/theme.module';
import { NgApexchartsModule } from "ng-apexcharts";



@NgModule({
  declarations: [
    LandingComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ThemeModule,
    NgApexchartsModule,
  ]
})
export class FeaturesModule { }
