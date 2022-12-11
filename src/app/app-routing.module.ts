import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'equipe', loadChildren: () => import('./equipes/equipes.module').then(m => m.EquipesModule) },
 { path: 'comptes', loadChildren: () => import('./comptes/comptes.module').then(m => m.ComptesModule) },
  { path: 'lectures', loadChildren: () => import('./lectures/lectures.module').then(m => m.LecturesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
