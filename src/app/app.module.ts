import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAdminModule } from './user-admin/user-admin.module';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import { FileuploadModule } from "./services/common/fileupload/fileupload.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [
        { provide: "baseurl", useValue: "https://localhost:7050/api", multi: true }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AdminModule,
        UserModule,
        UserAdminModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatButtonModule,
        ToastrModule.forRoot(),
        FileuploadModule
    ]
})
export class AppModule { }
