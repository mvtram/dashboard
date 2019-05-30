import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {DashboardModule} from './dashboard/dashboard.module';
const routes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},

  { path: 'login', loadChildren: './login/login.module#LoginModule' },


  {
    path: 'search',
    loadChildren: './dashboard/search/search.module#SearchModule'
  },
  {
    path: 'offers',
    loadChildren: './dashboard/offers/offers.module#OffersModule'
  },

  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
