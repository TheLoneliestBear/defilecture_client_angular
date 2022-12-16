import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipesComponent } from './equipes.component';
import { VoirEquipesComponent } from './voir-equipes/voir-equipes.component';
import { VoirUneEquipeComponent } from './voir-une-equipe/voir-une-equipe.component';

const routes: Routes = [
  { path: '', component: EquipesComponent },
  { path: 'voir-equipes', component: VoirEquipesComponent }, // On va sur la page de la liste directement
  { path: 'voir-une-equipe/:id', component: VoirUneEquipeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipesRoutingModule { }
