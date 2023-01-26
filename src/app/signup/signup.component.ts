import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Create_User } from '../contracts/Create_User';
import { SignupserviceService } from '../services/user/signupservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private signupServices: SignupserviceService ) { }

  
  // frm: FormGroup;
  ngOnInit(): void {
    // this.frm= this.formBuilder.group({
    //   firstName: [""],
    //   lastName : [""],
    //   userName : [""],
    //   emailAddress : [""],
    //   password : [""],
    //   birthDay :[""],
    //   phoneNumber : [""],
    //   country :[""],
    //   city:[""],
    //   address: [""]
    // })
  }
  // onSubmit(data:any) {
  //   debugger;
  // }

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
     
     this.signupServices.crateUser(user);
  }

}