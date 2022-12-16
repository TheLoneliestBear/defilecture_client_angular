import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipesService } from '../equipes.service';
import { Observable } from 'rxjs';
import { Equipe } from '../equipe';

@Component({
  selector: 'app-voir-une-equipe',
  templateUrl: './voir-une-equipe.component.html',
  styleUrls: ['./voir-une-equipe.component.css']
})
export class VoirUneEquipeComponent implements OnInit {
  uneEquipe:any;
  equipeId:any;

  constructor(
    private equipeService : EquipesService,
    private route: ActivatedRoute){ }




  ngOnInit(): void {
    this.equipeId = this.route.snapshot.params['equipeId'];
    this.uneEquipe = this.equipeService.voirEquipesById(this.equipeId);

/*
    this.routeActivée.params.subscribe( data => {
      this.equipeId = data['id'];
    });
   */ 
  }

}
