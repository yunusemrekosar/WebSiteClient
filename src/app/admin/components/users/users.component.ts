import { Component } from '@angular/core';
import { HttpclientService } from 'src/app/services/common/httpclient.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

  export class UsersComponent {
    constructor(private httpClientService: HttpclientService) {}
  
    ngOnInit() {
      // this.httpClientService.get({ controller: "users" }).subscribe((d: any) => console.log(d));

      //  let date = new Date(2000, 16, 17); 
      //  let dateOfBirth = date.toISOString();

    //  this.httpClientService.put({
    //    controller: "users"
    //   },{
    //     Id : 4,
    //     FirstName : "modelFirstNamed",
    //    LastName : "modeLastNamde",
    //    Email : "model@gmail.comd",
    //     Password : "modelPasswordd",
    //     TelNumber :"12345678922",
    //     Address : "modelAddress",
    //     Country : "modelCountry",
    //    City : "modelCity",
    //     UserName : "modelUserName",
    //     DateOfBirth : dateOfBirth,
    //     MemberIsWomen : true,
    //     ProfilePhoto : "modelProfilePhoto",
    //     IsActive : true 
    //   }).subscribe();

      // this.httpClientService.post({
      //   controller: "users"
      //  },{
      //    FirstName : "modelFirstNamed",
      //    LastName : "modeLastNamde",
      //    Email : "model@gmail.comd",
      //    Password : "modelPasswordd",
      //    TelNumber :"12345678922",
      //    Address : "modelAddress",
      //    Country : "modelCountry",
      //    City : "modelCity",
      //    UserName : "modelUserName",
      //    DateOfBirth : dateOfBirth,
      //    MemberIsWomen : true,
      //    ProfilePhoto : "modelProfilePhoto",
      //    IsActive : true
      //  }).subscribe();

    // this.httpClientService.delete({
    //   controller: "users"}
    //   , 18).subscribe();
   
    }
  }
  

