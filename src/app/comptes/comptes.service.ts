import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from './compte';

@Injectable({
  providedIn: 'root'
})
export class ComptesService {

  constructor(private httpClient: HttpClient) { }
  /*
  voirEquipes(): Observable<Equipe>{
    const equipesUrl = 'http://localhost:51723/api/Equipes';

    return this.httpClient.get<Equipe>(equipesUrl); // retourne un observable

  }*/

  voirComptes(){
    const equipesUrl = 'http://localhost:51723/api/Comptes';
    
    return this.httpClient.get(equipesUrl); 

  }
/*
  creerEquipe(){

  }

  supprimerEquipe(){

  }

  modifierEquipe(){

  }*/
}
