import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackerNewsService } from '../../services/hacker-news.service';
import {StoryComponent} from '../../components/story/story.component';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [CommonModule, StoryComponent],
  templateUrl: './stories.component.html',
  providers: [HackerNewsService]
})
export class StoriesComponent implements OnInit {

  topStories: any[] = [];

  constructor(private hackerNewsService: HackerNewsService) { }

  ngOnInit(): void {
    this.hackerNewsService.getTopStories().subscribe((ids: number[]) => {
      ids.slice(0, 30).forEach(id => {
        this.hackerNewsService.getItem(id).subscribe(story => {
          this.topStories.push(story);
        });
      });
    });
  }
}
