import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInfoOneComponent } from './item-info-one.component';

describe('ItemInfoOneComponent', () => {
  let component: ItemInfoOneComponent;
  let fixture: ComponentFixture<ItemInfoOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemInfoOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInfoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
