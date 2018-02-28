import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPatrimonyComponent } from './item-patrimony.component';

describe('ItemPatrimonyComponent', () => {
  let component: ItemPatrimonyComponent;
  let fixture: ComponentFixture<ItemPatrimonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPatrimonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPatrimonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
