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
      this.httpClientService.get({ controller: "users" }).subscribe((d: any) => console.log(d));
    }
  }
  

