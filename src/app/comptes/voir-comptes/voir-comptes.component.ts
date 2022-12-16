import { Component, OnInit } from '@angular/core';
import { Compte } from '../compte';
import { ComptesService } from '../comptes.service';

@Component({
  selector: 'app-voir-comptes',
  templateUrl: './voir-comptes.component.html',
  styleUrls: ['./voir-comptes.component.css']
})
export class VoirComptesComponent implements OnInit{

  
  compteTyped:Compte;
  compteList: any;

  constructor(private compteService: ComptesService){

  }
  ngOnInit(): void {
    /*this.equipeService.voirEquipes().subscribe(data => {
      this.equipesTyped = data;
    });*/
    this.compteList = this.compteService.voirComptes();
  }
/*
  ngOnInit(): void {
    this.equipeService.voirEquipes().subscribe(data => {
      this.equipeList = data;
    })
  }
*/

}
