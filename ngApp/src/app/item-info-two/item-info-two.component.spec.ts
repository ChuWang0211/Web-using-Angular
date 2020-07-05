import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemInfoTwoComponent } from './item-info-two.component';

describe('ItemInfoTwoComponent', () => {
  let component: ItemInfoTwoComponent;
  let fixture: ComponentFixture<ItemInfoTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemInfoTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInfoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
