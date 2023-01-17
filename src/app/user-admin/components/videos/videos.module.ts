import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideosComponent } from './videos.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    VideosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "" , component: VideosComponent},
    ])
  ]
})
export class VideosModule { }
