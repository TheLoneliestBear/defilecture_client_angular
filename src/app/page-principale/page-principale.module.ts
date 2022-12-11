import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnTeteComponent } from './en-tete/en-tete.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { PiedPageComponent } from './pied-page/pied-page.component';



@NgModule({
  declarations: [
    EnTeteComponent,
    SideMenuComponent,
    PiedPageComponent
  ],
  exports: [
    EnTeteComponent,
    SideMenuComponent,
    PiedPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagePrincipaleModule { }
