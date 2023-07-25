import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListResidenciaPage } from './list-residencia.page';

describe('ListResidenciaPage', () => {
  let component: ListResidenciaPage;
  let fixture: ComponentFixture<ListResidenciaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListResidenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
