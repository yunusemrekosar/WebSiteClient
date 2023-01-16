import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { ChannelsModule } from './channels/channels.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    HomeModule,
    ProfileModule,
    ChannelsModule
  ]
})
export class ComponentsModule { }
