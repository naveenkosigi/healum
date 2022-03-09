import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesMainPageComponentComponent } from './notes-main-page-component.component';

describe('NotesMainPageComponentComponent', () => {
  let component: NotesMainPageComponentComponent;
  let fixture: ComponentFixture<NotesMainPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesMainPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesMainPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
