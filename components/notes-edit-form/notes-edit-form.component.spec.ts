import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesEditFormComponent } from './notes-edit-form.component';

describe('NotesEditFormComponent', () => {
  let component: NotesEditFormComponent;
  let fixture: ComponentFixture<NotesEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
