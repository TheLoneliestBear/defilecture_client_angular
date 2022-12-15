import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lecture } from './lecture';

@Injectable({
  providedIn: 'root'
})
export class LecturesService {

  constructor(private httpClient: HttpClient) { }
  voirLectures(){
    const lecturesUrl = 'http://localhost:51723/api/Lectures';
    
    return this.httpClient.get(lecturesUrl); 

  }

  voirLecturesById(lectureId:any): Observable<Lecture>{
    const lecturesUrl = 'http://localhost:51723/api/Lecture/'+lectureId;
    return this.httpClient.get<Lecture>(lecturesUrl); // retourne un observable
  }

  deleteLecturesById(lectureId:any): Observable<Lecture>{
    const lecturesUrl = 'http://localhost:51723/api/Lecture/'+lectureId;
    return this.httpClient.delete<Lecture>(lecturesUrl); // retourne un observable
  }
}
