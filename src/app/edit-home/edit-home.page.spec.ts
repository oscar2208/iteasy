import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditHomePage } from './edit-home.page';

describe('EditHomePage', () => {
  let component: EditHomePage;
  let fixture: ComponentFixture<EditHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
