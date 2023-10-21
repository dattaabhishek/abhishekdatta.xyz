import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    BannerComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent,
    ProfileComponent
  ]
})
export class PortfolioModule { }
