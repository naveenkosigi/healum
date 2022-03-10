import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNotesEditFormComponent } from './article-notes-edit-form.component';

describe('ArticleNotesEditFormComponent', () => {
  let component: ArticleNotesEditFormComponent;
  let fixture: ComponentFixture<ArticleNotesEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleNotesEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleNotesEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
