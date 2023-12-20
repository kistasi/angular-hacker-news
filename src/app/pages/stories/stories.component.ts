import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackerNewsService } from '../../services/hacker-news/hacker-news.service';
import {StoryComponent} from '../../components/story/story.component';
import { Story } from '../../interfaces/story';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [CommonModule, StoryComponent],
  templateUrl: './stories.component.html',
  providers: [HackerNewsService]
})
export class StoriesComponent implements OnInit {

  static readonly STORY_LIMIT = 30;
  topStories: Story[] = [];

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit(): void {
    this.hackerNewsService.getTopStories().subscribe((ids: number[]) => {
      ids.slice(0, StoriesComponent.STORY_LIMIT).forEach((id: number, index: number) => {
        this.hackerNewsService.getStory(id).subscribe(story => {
          story.index = index + 1;
          this.topStories.push(story);
        });
      });
    });

    this.topStories.sort((a, b) => a.id - b.id);
  }
}
