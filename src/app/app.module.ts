import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAdminModule } from './user-admin/user-admin.module';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    UserModule,
    UserAdminModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {provide: "baseurl", useValue:"https://localhost:7050/api", multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
