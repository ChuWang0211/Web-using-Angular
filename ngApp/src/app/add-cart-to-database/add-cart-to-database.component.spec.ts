import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCartToDatabaseComponent } from './add-cart-to-database.component';

describe('AddCartToDatabaseComponent', () => {
  let component: AddCartToDatabaseComponent;
  let fixture: ComponentFixture<AddCartToDatabaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCartToDatabaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCartToDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
