import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { FeaturesRoutingModule } from '../features/features-routing.module';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FeaturesRoutingModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent
  ]
})
export class ThemeModule { }
