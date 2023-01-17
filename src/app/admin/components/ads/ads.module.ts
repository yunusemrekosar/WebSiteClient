import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsComponent } from './ads.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "" , component: AdsComponent},
    ])

  ]
})
export class AdsModule { }
