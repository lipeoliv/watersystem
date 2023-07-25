import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalResidenciaPage } from './modal-residencia.page';

describe('ModalResidenciaPage', () => {
  let component: ModalResidenciaPage;
  let fixture: ComponentFixture<ModalResidenciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalResidenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
