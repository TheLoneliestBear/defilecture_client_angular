import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipesRoutingModule } from './equipes-routing.module';
import { EquipesComponent } from './equipes.component';
import { VoirEquipesComponent } from './voir-equipes/voir-equipes.component';
import { VoirUneEquipeComponent } from './voir-une-equipe/voir-une-equipe.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component:EquipesComponent},
  { path: 'voir-equipes', component:VoirEquipesComponent},
  { path: 'voir-une-equipe', component:VoirUneEquipeComponent}
]
@NgModule({
  declarations: [
    EquipesComponent,
    VoirEquipesComponent,
    VoirUneEquipeComponent
  ],
  imports: [
    CommonModule,
    EquipesRoutingModule
  ]
})
export class EquipesModule { }
