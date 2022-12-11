import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirLecturesComponent } from './voir-lectures.component';

describe('VoirLecturesComponent', () => {
  let component: VoirLecturesComponent;
  let fixture: ComponentFixture<VoirLecturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirLecturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirLecturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
