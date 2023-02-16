import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Create_User } from 'src/app/contracts/Create_User';
import { HttpclientService } from '../common/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  constructor(private httpClientService:HttpclientService) { }

  crateUser(user: Create_User , successCalBack? : any , errorCalBack?: any)
  {
    this.httpClientService.post({
      controller:"Login"
    }, user).subscribe(
      result => {
        successCalBack();
      },
      (errorResponse : HttpErrorResponse) => {const err: Array<{ key: string, value : Array<string>}> = errorResponse.error;
      let message = "";
      err.forEach((v,index)=>{
        v.value.forEach((_v, _index) => {
          message += `${_v}    ` //?
        });
      });
      errorCalBack(message);
    });
  }
}
