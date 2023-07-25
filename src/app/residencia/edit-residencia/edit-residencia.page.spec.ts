import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditResidenciaPage } from './edit-residencia.page';

describe('EditResidenciaPage', () => {
  let component: EditResidenciaPage;
  let fixture: ComponentFixture<EditResidenciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditResidenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
