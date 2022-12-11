import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LecturesRoutingModule } from './lectures-routing.module';
import { LecturesComponent } from './lectures.component';
import { VoirLecturesComponent } from './voir-lectures/voir-lectures.component';
import { VoirUneLectureComponent } from './voir-une-lecture/voir-une-lecture.component';
import { SupprimerUneLectureComponent } from './supprimer-une-lecture/supprimer-une-lecture.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component:LecturesComponent},
  { path: 'voir-lectures', component:VoirLecturesComponent},
  { path: 'voir-une-lecture', component:VoirUneLectureComponent},
  { path: 'supprimer-une-lecture', component:SupprimerUneLectureComponent}
]
@NgModule({
  declarations: [
    LecturesComponent,
    VoirLecturesComponent,
    VoirUneLectureComponent,
    SupprimerUneLectureComponent
  ],
  imports: [
    CommonModule,
    LecturesRoutingModule
  ]
})
export class LecturesModule { }
