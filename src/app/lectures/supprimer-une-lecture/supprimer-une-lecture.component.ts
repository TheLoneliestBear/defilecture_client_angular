import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-supprimer-une-lecture',
  templateUrl: './supprimer-une-lecture.component.html',
  styleUrls: ['./supprimer-une-lecture.component.css']
})
export class SupprimerUneLectureComponent implements OnInit  {
  lectureId = 0;

  constructor(private routeActivée: ActivatedRoute){ }




  ngOnInit(): void {
    this.routeActivée.params.subscribe( data => {
      this.lectureId = data['id'];
    });

  }
}
