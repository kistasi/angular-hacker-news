import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackerNewsService } from '../../services/hacker-news/hacker-news.service';
import { StoryComponent } from '../../components/story/story.component';
import { Story } from '../../interfaces/story';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [CommonModule, StoryComponent],
  templateUrl: './top-stories.component.html',
  providers: [HackerNewsService]
})
export class TopStoriesComponent implements OnInit, OnDestroy {

  static readonly STORY_LIMIT = 30;
  topStories: Story[] = [];
  hackerNewsServiceSubscription: Subscription = new Subscription;

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit(): void {
    this.hackerNewsServiceSubscription = this.hackerNewsService.getTopStories().subscribe((ids: number[]) => {
      const storyIds = ids.slice(0, TopStoriesComponent.STORY_LIMIT);
      let storiesFetched = 0;

      storyIds.forEach((id: number, index: number) => {
        this.hackerNewsService.getStory(id).subscribe(story => {
          story.index = index + 1;
          this.topStories.push(story);

          storiesFetched++;
          if (storiesFetched === storyIds.length) {
            this.sortStories();
          }
        });
      });
    });
  }

  ngOnDestroy(): void {
    this.hackerNewsServiceSubscription.unsubscribe();
  }

  private sortStories(): void {
    this.topStories.sort((a, b) => a.index - b.index);
  }
}
