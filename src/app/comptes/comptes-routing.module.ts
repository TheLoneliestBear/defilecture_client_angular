import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComptesComponent } from './comptes.component';
import { CreerComptesComponent } from './creer-comptes/creer-comptes.component';
import { DeleteComptesComponent } from './delete-comptes/delete-comptes.component';
import { ModifierComptesComponent } from './modifier-comptes/modifier-comptes.component';
import { VoirComptesComponent } from './voir-comptes/voir-comptes.component';

const routes: Routes = [
  { path: '', component: VoirComptesComponent },
  //{ path: 'voir-comptes', component: VoirComptesComponent },
  { path: 'creer-comptes', component: CreerComptesComponent },
  { path: 'modifier-comptes', component: ModifierComptesComponent },
  { path: 'delete-comptes', component: DeleteComptesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComptesRoutingModule { }
