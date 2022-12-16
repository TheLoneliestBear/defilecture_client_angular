import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerComptesComponent } from './creer-comptes.component';

describe('CreerComptesComponent', () => {
  let component: CreerComptesComponent;
  let fixture: ComponentFixture<CreerComptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerComptesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreerComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
