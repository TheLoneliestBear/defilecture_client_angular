import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirUneLectureComponent } from './voir-une-lecture.component';

describe('VoirUneLectureComponent', () => {
  let component: VoirUneLectureComponent;
  let fixture: ComponentFixture<VoirUneLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirUneLectureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirUneLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
