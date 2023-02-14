import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileuploadComponent } from './fileupload.component';
import { RouterModule } from '@angular/router';
import { NgxFileDropModule } from 'ngx-file-drop';


@NgModule({
  declarations: [
    FileuploadComponent
  ],
  imports: [
    CommonModule,
    NgxFileDropModule,
  ],
  exports: [
    FileuploadComponent
  ]
})
export class FileuploadModule { }
