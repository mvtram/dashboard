import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule, MatButtonModule, MatIconModule, MatMenuModule, MatCardModule, MatDividerModule,
  MatGridListModule } from '@angular/material';

@NgModule({
  imports: [MatIconModule,
    MatGridListModule,
    MatDividerModule,
    MatExpansionModule,
    MatSidenavModule,
    MatBadgeModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
],
  exports: [
    MatCardModule,
    MatGridListModule,
    MatIconModule,
  MatExpansionModule,
  MatSidenavModule,
  MatBadgeModule,
  MatButtonModule,
    MatMenuModule,
    MatDividerModule,
]
})
export class MaterialModule {

}
