import { Component } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebSiteClient';
}

$.get("https://localhost:7050/api/users", (data: any) =>{ console.log(data)})