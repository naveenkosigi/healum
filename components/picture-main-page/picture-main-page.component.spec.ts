import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureMainPageComponent } from './picture-main-page.component';

describe('PictureMainPageComponent', () => {
  let component: PictureMainPageComponent;
  let fixture: ComponentFixture<PictureMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
