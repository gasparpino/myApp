import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCategoryPage } from './list-category.page';

describe('ListCategoryPage', () => {
  let component: ListCategoryPage;
  let fixture: ComponentFixture<ListCategoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
