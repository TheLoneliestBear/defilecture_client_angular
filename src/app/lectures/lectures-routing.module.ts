import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LecturesComponent } from './lectures.component';
import { SupprimerUneLectureComponent } from './supprimer-une-lecture/supprimer-une-lecture.component';
import { VoirLecturesComponent } from './voir-lectures/voir-lectures.component';
import { VoirUneLectureComponent } from './voir-une-lecture/voir-une-lecture.component';

const routes: Routes = [
  { path: '', component: LecturesComponent },
  { path: 'voir-lectures', component: VoirLecturesComponent },
  { path: 'voir-une-lecture/:id', component: VoirUneLectureComponent },
  { path: 'supprimer-une-lecture/:id', component: SupprimerUneLectureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LecturesRoutingModule { }
