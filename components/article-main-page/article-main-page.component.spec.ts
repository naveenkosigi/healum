import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleMainPageComponent } from './article-main-page.component';

describe('ArticleMainPageComponent', () => {
  let component: ArticleMainPageComponent;
  let fixture: ComponentFixture<ArticleMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
