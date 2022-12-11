import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voir-une-equipe',
  templateUrl: './voir-une-equipe.component.html',
  styleUrls: ['./voir-une-equipe.component.css']
})
export class VoirUneEquipeComponent implements OnInit {

  equipeId = 0;

  constructor(private routeActivée: ActivatedRoute){ }




  ngOnInit(): void {
    this.routeActivée.params.subscribe( data => {
      this.equipeId = data['id'];
    });
    
  }

}
