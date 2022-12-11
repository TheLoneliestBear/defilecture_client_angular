import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirEquipesComponent } from './voir-equipes.component';

describe('VoirEquipesComponent', () => {
  let component: VoirEquipesComponent;
  let fixture: ComponentFixture<VoirEquipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirEquipesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirEquipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
