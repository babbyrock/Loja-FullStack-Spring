import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LojasListaComponent } from './lojas-lista.component';

describe('LojasListaComponent', () => {
  let component: LojasListaComponent;
  let fixture: ComponentFixture<LojasListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LojasListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LojasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
