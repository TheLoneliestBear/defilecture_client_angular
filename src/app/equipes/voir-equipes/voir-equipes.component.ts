import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from '../equipe';
import { EquipesService } from '../equipes.service';

@Component({
  selector: 'app-voir-equipes',
  templateUrl: './voir-equipes.component.html',
  styleUrls: ['./voir-equipes.component.css']
})

export class VoirEquipesComponent implements OnInit {

  equipesTyped:Equipe;
  equipeList: any;

  constructor(private equipeService: EquipesService){

  }
  ngOnInit(): void {
    /*this.equipeService.voirEquipes().subscribe(data => {
      this.equipesTyped = data;
    });*/
    this.equipeList = this.equipeService.voirEquipes();
  }
/*
  ngOnInit(): void {
    this.equipeService.voirEquipes().subscribe(data => {
      this.equipeList = data;
    })
  }
*/

}
