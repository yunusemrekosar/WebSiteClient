import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FileSystemFileEntry, NgxFileDropEntry } from 'ngx-file-drop';
import { CostomtoastrService, MessageType, Position } from '../costomtoastr.service';
import { HttpclientService } from '../httpclient.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent {

  public files: NgxFileDropEntry[];

  @Input() options: Partial<FileuploadOptions>;

constructor( private httpClientService : HttpclientService, private CostomToastr: CostomtoastrService ) {}
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    const fileData : FormData = new FormData();
    for (const file of files) {
       (file.fileEntry as FileSystemFileEntry).file((_file : File) => {
        fileData.append(_file.name, _file, file.relativePath);
       })
    }
    this.httpClientService.post({
      controller: this.options.controller,
      action: this.options.action,
      headers: new HttpHeaders({"responseType": "blob"})
    },fileData).subscribe(data => {
      this.CostomToastr.message("Upload Successful", "Success",
       MessageType.Success, Position.TopRight);
    },
  (error : HttpErrorResponse) => {
    this.CostomToastr.message("Upload Is Not Successful", "Error",
    MessageType.Error, Position.TopRight );
  });
  }
}

export class FileuploadOptions
{
  controller?: string;
  action?: string;
//queryString?: string;
  explanation?: string;
  accept?:string;
}
