import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsModule } from './channels/channels.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { VideosModule } from './videos/videos.module';
import { CommentsModule } from './comments/comments.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ChannelsModule,
    DashboardModule,
    VideosModule,
    CommentsModule,
    
  ]
})
export class ComponentsModule { }
