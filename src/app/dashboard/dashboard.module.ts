import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { MaterialModule } from '../views/material';
const routes: Routes = [
  {
    path: '', component: DashboardComponent
  }
];


@NgModule({
  declarations:[DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule.forChild(routes),
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule

  ],
  exports: [RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
   ]

})
export class DashboardModule { }
