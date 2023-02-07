import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { ChannelsModule } from './channels/channels.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardModule,
    HomeModule,
    ProfileModule,
    ChannelsModule,
    LoginModule,
    SignupModule
  ],
  exports:[
    LoginModule,
    SignupModule
  ]
})
export class ComponentsModule { }
