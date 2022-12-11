import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComptesRoutingModule } from './comptes-routing.module';
import { ComptesComponent } from './comptes.component';


@NgModule({
  declarations: [
    ComptesComponent
  ],
  imports: [
    CommonModule,
    ComptesRoutingModule
  ]
})
export class ComptesModule { }
