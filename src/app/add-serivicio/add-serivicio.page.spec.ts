import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSerivicioPage } from './add-serivicio.page';

describe('AddSerivicioPage', () => {
  let component: AddSerivicioPage;
  let fixture: ComponentFixture<AddSerivicioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddSerivicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
