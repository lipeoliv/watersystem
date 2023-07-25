import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaernPage } from './caern.page';

describe('CaernPage', () => {
  let component: CaernPage;
  let fixture: ComponentFixture<CaernPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CaernPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
