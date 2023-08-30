import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'features',
    pathMatch:'full'
  },

  {
    path:'features',
    component:LandingComponent,
    loadChildren: () => import('./features/features.module').then((module) => module.FeaturesModule)
  },

  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then((module) => module.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
