import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWeightComponent } from './my-weight.component';

describe('MyWeightComponent', () => {
  let component: MyWeightComponent;
  let fixture: ComponentFixture<MyWeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
