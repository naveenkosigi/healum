import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormConstructorComponent } from './dynamic-form-constructor.component';

describe('DynamicFormConstructorComponent', () => {
  let component: DynamicFormConstructorComponent;
  let fixture: ComponentFixture<DynamicFormConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormConstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
