import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminItemManagmentPageComponent } from './admin-item-managment-page.component';

describe('AdminItemManagmentPageComponent', () => {
  let component: AdminItemManagmentPageComponent;
  let fixture: ComponentFixture<AdminItemManagmentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminItemManagmentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminItemManagmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
