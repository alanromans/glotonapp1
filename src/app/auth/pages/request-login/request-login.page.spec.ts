import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestLoginPage } from './request-login.page';

describe('RequestLoginPage', () => {
  let component: RequestLoginPage;
  let fixture: ComponentFixture<RequestLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
