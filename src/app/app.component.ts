import { Component } from '@angular/core';
import {Router} from '@angular/router'
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebSiteClient';

  
constructor(private router : Router){}

  gotopage(pageName: string):void{
    this.router.navigate([`${pageName}`]); 
  }


}



