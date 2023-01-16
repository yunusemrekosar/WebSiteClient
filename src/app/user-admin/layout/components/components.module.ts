import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    SidebarModule
  ]
})
export class ComponentsModule { }
