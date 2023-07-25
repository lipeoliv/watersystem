import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsumoPage } from './consumo.page';

describe('ConsumoPage', () => {
  let component: ConsumoPage;
  let fixture: ComponentFixture<ConsumoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConsumoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
