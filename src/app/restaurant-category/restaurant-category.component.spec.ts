import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCategoryComponent } from './restaurant-category.component';

describe('RestaurantCategoryComponent', () => {
  let component: RestaurantCategoryComponent;
  let fixture: ComponentFixture<RestaurantCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantCategoryComponent]
    });
    fixture = TestBed.createComponent(RestaurantCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
