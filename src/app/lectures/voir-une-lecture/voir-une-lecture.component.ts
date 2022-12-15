import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-voir-une-lecture',
  templateUrl: './voir-une-lecture.component.html',
  styleUrls: ['./voir-une-lecture.component.css']
})
export class VoirUneLectureComponent implements OnInit{

  lectureId = 0;

  constructor(private routeActivée: ActivatedRoute){ }




  ngOnInit(): void {
    this.routeActivée.params.subscribe( data => {
      this.lectureId = data['id'];
    });
    
  }

}
