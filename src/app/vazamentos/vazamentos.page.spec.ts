import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VazamentosPage } from './vazamentos.page';

describe('VazamentosPage', () => {
  let component: VazamentosPage;
  let fixture: ComponentFixture<VazamentosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VazamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
