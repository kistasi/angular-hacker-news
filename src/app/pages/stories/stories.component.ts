import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HackerNewsService } from '../../services/hacker-news.service';

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.css',
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
