import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowServicePage } from './show-service.page';

describe('ShowServicePage', () => {
  let component: ShowServicePage;
  let fixture: ComponentFixture<ShowServicePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShowServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
