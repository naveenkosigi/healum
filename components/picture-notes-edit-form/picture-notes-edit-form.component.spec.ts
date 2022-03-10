import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureNotesEditFormComponent } from './picture-notes-edit-form.component';

describe('PictureNotesEditFormComponent', () => {
  let component: PictureNotesEditFormComponent;
  let fixture: ComponentFixture<PictureNotesEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureNotesEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureNotesEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
