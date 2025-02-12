import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompletarRegistroPage } from './completar-registro.page';

describe('CompletarRegistroPage', () => {
  let component: CompletarRegistroPage;
  let fixture: ComponentFixture<CompletarRegistroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletarRegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
