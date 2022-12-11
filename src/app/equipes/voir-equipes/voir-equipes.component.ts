import { Component, OnInit } from '@angular/core';
import { Equipe } from '../equipe';
import { EquipesService } from '../equipes.service';

@Component({
  selector: 'app-voir-equipes',
  templateUrl: './voir-equipes.component.html',
  styleUrls: ['./voir-equipes.component.css']
})

export class VoirEquipesComponent implements OnInit {

  
  equipeList:any;

  constructor(private equipeService: EquipesService){

  }
  ngOnInit(): void {
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
