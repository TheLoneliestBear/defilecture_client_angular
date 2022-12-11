import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagePrincipaleModule } from './page-principale/page-principale.module';
import { ComptesModule } from './comptes/comptes.module';
import { EquipesModule } from './equipes/equipes.module';
import { LecturesModule } from './lectures/lectures.module';

import { HttpClientModule } from '@angular/common/http';






@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PagePrincipaleModule,
        ComptesModule,
        EquipesModule,
        LecturesModule,
        HttpClientModule
    ]
})
export class AppModule { }
