import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HackerNewsService } from './hacker-news.service';
import { Story } from '../../interfaces/story';

describe('HackerNewsService', () => {
  let service: HackerNewsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HackerNewsService
      ]
    });

    service = TestBed.inject(HackerNewsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getTopStories should return an array of story IDs', () => {
    const mockTopStories = [1, 2, 3];

    service.getTopStories().subscribe(stories => {
      expect(stories.length).toBe(3);
      expect(stories).toEqual(mockTopStories);
    });

    const req = httpTestingController.expectOne(`${HackerNewsService.BASE_URL}/topstories.json`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockTopStories);
  });

  it('getStory should return story data', () => {
    const mockStory = { id: 1, title: 'Test Story' } as Story;

    service.getStory(1).subscribe(story => {
      expect(story).toEqual(mockStory);
    });

    const req = httpTestingController.expectOne(`${HackerNewsService.BASE_URL}/item/1.json`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockStory);
  });
});
