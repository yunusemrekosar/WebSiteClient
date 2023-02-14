import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { loginDTO } from 'src/app/contracts/loginDTO';
import { tokenResponse } from 'src/app/contracts/tokenResponse';
import { CostomtoastrService, MessageType, Position } from '../common/costomtoastr.service';
import { HttpclientService } from '../common/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private HttpclientService : HttpclientService, private toastr : CostomtoastrService) { }

  login (login :loginDTO)
  {
  const Observable : Observable<any | tokenResponse > = this.HttpclientService.post<any | tokenResponse>({
      controller: "users",
      action: "Login"
    },login)

firstValueFrom<tokenResponse | null | undefined>(Observable).then((tokenResponse) => {
    if (tokenResponse != null) {
      localStorage.setItem("accessToken", tokenResponse.token.accessToken);
      localStorage.setItem("expiration", tokenResponse.token.expiration.toString());
      this.toastr.message("Login Successful", "Login", MessageType.Success, Position.TopRight);
    } 
  }).catch((error) => {
    console.error(error);
    this.toastr.message("Login failed", "Login", MessageType.Error, Position.TopRight);
  });
}}

