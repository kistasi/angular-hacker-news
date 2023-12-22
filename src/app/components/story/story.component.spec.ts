import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryComponent } from './story.component';

describe('StoryComponent', () => {
  let component: StoryComponent;
  let fixture: ComponentFixture<StoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle input properties', () => {
    component.index = 1;
    component.url = 'https://example.com';
    component.title = 'Test Title';
    component.score = 100;
    component.author = 'testauthor';
    component.time = 1234567890;
    fixture.detectChanges();

    expect(component.index).toBe(1);
    expect(component.url).toBe('https://example.com');
    expect(component.title).toBe('Test Title');
    expect(component.score).toBe(100);
    expect(component.author).toBe('testauthor');
    expect(component.time).toBe(1234567890);
  });

  it('should format title with index', () => {
    component.index = 1;
    component.title = 'Test Title';
    fixture.detectChanges();

    expect(component.titleWithIndex).toBe('#1: Test Title');
  });

  it('should generate correct author link', () => {
    component.author = 'testauthor';
    fixture.detectChanges();

    expect(component.authorLink).toBe('https://news.ycombinator.com/user?id=testauthor');
  });
});
