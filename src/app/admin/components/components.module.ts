import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdsModule } from './ads/ads.module';
import { ChannelsModule } from './channels/channels.module';
import { CommentsModule } from './comments/comments.module';
import { UsersModule } from './users/users.module';
import { VideosModule } from './videos/videos.module';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdsModule,
    ChannelsModule,
    CommentsModule,
    UsersModule,
    VideosModule,
    DashboardModule,
  ]
})
export class ComponentsModule { }
