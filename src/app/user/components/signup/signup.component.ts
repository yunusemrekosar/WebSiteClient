import { Component, OnInit } from '@angular/core';
import { Create_User } from 'src/app/contracts/Create_User';
import { CostomtoastrService, MessageType, Position } from 'src/app/services/common/costomtoastr.service';
import { SignupserviceService } from 'src/app/services/user/signupservice.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent  implements OnInit {

  constructor(private signupServices: SignupserviceService, private toastr: CostomtoastrService) { }
  

  ngOnInit(): void { }

  create(txtFirstname: HTMLInputElement ,txtLastname: HTMLInputElement ,txtUserName: HTMLInputElement ,txtPassword: HTMLInputElement ,txtPhoneNumber: HTMLInputElement,txtBirthDay: HTMLInputElement  , txtCountry: HTMLInputElement, txtCity: HTMLInputElement, txtAddress: HTMLInputElement, txtemail:HTMLInputElement )
  {
    const user: Create_User = new Create_User();
     user.FirstName= txtFirstname.value;
     user.LastName = txtLastname.value;
     user.username= txtUserName.value;
     user.password = txtPassword.value;
     user.PhoneNumber= txtPhoneNumber.value;
     user.Country = txtCountry.value;
     user.City=txtCity.value;
     user.Address=txtAddress.value;
     user.Email=txtemail.value;
     user.DateOfBirth = new Date(txtBirthDay.value);

     this.signupServices.crateUser(user, () => {
      this.toastr.message("successful", "signup" , MessageType.Success , Position.TopRight);
     },
     errormessage => { 
      
      this.toastr.message(errormessage," ",MessageType.Error, Position.TopRight)
     });   
  }

}