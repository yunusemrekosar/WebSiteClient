import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CostomtoastrService {

  constructor(private toastr : ToastrService) { }
  message(message:string, title : string, messagetypeT: MessageType, positionT: Position ) {

    this.toastr[messagetypeT](message, title,{
      positionClass: positionT
    } )
  }
}

export enum  MessageType
{
Success = "success",
Info ="info",
Warning="warning",
Error="error",
}

export enum Position{
TopRight = "toast-top-right",
BottomRight= "toast-bottom-right",
BottomLeft= "toast-bottom-left",
TopLeft= "toast-top-left'",
TopFullWidth= "toast-top-full-width",
BottomFullWidth= "toast-buttom-full-width",
TopCenter= "toast-top-center",
BottomCenter= "toast-buttom-center"
}