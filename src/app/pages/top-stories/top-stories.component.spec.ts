import { ComponentFixture, TestBed } from "@angular/core/testing";
import { TopStoriesComponent } from "./top-stories.component";
import { of } from "rxjs";
import { HackerNewsService } from "../../services/hacker-news/hacker-news.service";
import { CommonModule } from "@angular/common";
import { StoryComponent } from "../../components/story/story.component";
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TopStoriesComponent', () => {
  let component: TopStoriesComponent;
  let fixture: ComponentFixture<TopStoriesComponent>;
  let hackerNewsServiceMock: unknown;

  beforeEach(async () => {
    hackerNewsServiceMock = {
      getTopStories: jasmine.createSpy('getTopStories').and.returnValue(of([])),
      getStory: jasmine.createSpy('getStory').and.returnValue(of({}))
    };

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        CommonModule,
        StoryComponent
      ],
      providers: [
        { provide: HackerNewsService, useValue: hackerNewsServiceMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
