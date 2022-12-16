import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComptesRoutingModule } from './comptes-routing.module';
import { ComptesComponent } from './comptes.component';
import { VoirComptesComponent } from './voir-comptes/voir-comptes.component';
import { ModifierComptesComponent } from './modifier-comptes/modifier-comptes.component';
import { CreerComptesComponent } from './creer-comptes/creer-comptes.component';
import { DeleteComptesComponent } from './delete-comptes/delete-comptes.component';


@NgModule({
  declarations: [
    ComptesComponent,
    VoirComptesComponent,
    ModifierComptesComponent,
    CreerComptesComponent,
    DeleteComptesComponent
  ],
  imports: [
    CommonModule,
    ComptesRoutingModule
  ]
})
export class ComptesModule { }
