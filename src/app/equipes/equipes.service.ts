import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Equipe } from './equipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipesService {

  constructor(private httpClient: HttpClient) { }
/*
  voirEquipes(): Observable<Equipe>{
    const equipesUrl = 'http://localhost:51723/api/Equipes';

    return this.httpClient.get<Equipe>(equipesUrl); // retourne un observable

  }
*/
  voirEquipes(){
    const equipesUrl = 'http://localhost:51723/api/Equipes';
    
    return this.httpClient.get(equipesUrl); 

  }

  voirEquipesById(equipeId:any): Observable<Equipe>{
    const equipesUrl = 'http://localhost:51723/api/Equipe/'+equipeId;
    return this.httpClient.get<Equipe>(equipesUrl); // retourne un observable
  }

  creerEquipe(){

  }

  supprimerEquipe(){

  }

  modifierEquipe(){

  }
}
