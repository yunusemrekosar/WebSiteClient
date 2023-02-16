import { Component } from '@angular/core';
import {loginDTO} from 'src/app/contracts/loginDTO' 
import { CostomtoastrService, MessageType, Position } from 'src/app/services/common/costomtoastr.service';
import { LoginService } from 'src/app/services/user/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   
  constructor(private loginServices: LoginService, private toastr: CostomtoastrService) { }

  ngOnInit(): void { }

  login(txtUserNameorEmail: HTMLInputElement ,txtPassword: HTMLInputElement  )
  {
    const login: loginDTO = new loginDTO();
     login.usernameoremail = txtUserNameorEmail.value;
     login.password = txtPassword.value;

     this.loginServices.login(login)    
  }
}
