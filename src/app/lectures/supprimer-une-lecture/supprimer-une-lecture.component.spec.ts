import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerUneLectureComponent } from './supprimer-une-lecture.component';

describe('SupprimerUneLectureComponent', () => {
  let component: SupprimerUneLectureComponent;
  let fixture: ComponentFixture<SupprimerUneLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerUneLectureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupprimerUneLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
