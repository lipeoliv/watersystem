import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResidenciaPage } from './residencia.page';

describe('ResidenciaPage', () => {
  let component: ResidenciaPage;
  let fixture: ComponentFixture<ResidenciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResidenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
