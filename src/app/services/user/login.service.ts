import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginDTO } from 'src/app/contracts/loginDTO';
import { token } from 'src/app/contracts/token';
import { HttpclientService } from '../common/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private HttpclientService : HttpclientService) { }

  login (login :loginDTO, successCalBack? : any , errorCalBack?: any)
 {
  this.HttpclientService.post({
      controller: "users",
      action: "Login"
    },login).subscribe(
      result => {successCalBack();}
      , 
      (errorResponse : HttpErrorResponse) => {const err: string = errorResponse.error;
      let message = err;
      errorCalBack(message);
      }    
    );
  }
}

