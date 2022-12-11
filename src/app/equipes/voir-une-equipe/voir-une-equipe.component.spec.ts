import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirUneEquipeComponent } from './voir-une-equipe.component';

describe('VoirUneEquipeComponent', () => {
  let component: VoirUneEquipeComponent;
  let fixture: ComponentFixture<VoirUneEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirUneEquipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirUneEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
