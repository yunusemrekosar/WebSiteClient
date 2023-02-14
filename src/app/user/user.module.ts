import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { LoginModule } from './components/login/login.module';
import { SignupModule } from './components/signup/signup.module';
import { FileuploadModule } from '../services/common/fileupload/fileupload.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    LoginModule,
    SignupModule,
    
  ]

})
export class UserModule { }
