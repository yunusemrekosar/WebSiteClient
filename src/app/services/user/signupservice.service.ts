import { Injectable } from '@angular/core';
import { Create_User } from 'src/app/contracts/Create_User';
import { HttpclientService } from '../common/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  constructor(private httpClientService:HttpclientService) { }

  crateUser(user: Create_User){
    this.httpClientService.post({
      controller:"users"
    }, user).subscribe();
  }
}
