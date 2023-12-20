import { Component, Input } from '@angular/core';
import { RelativeTimePipe } from '../../pipes/relative-time/relative-time.pipe';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [
    RelativeTimePipe
  ],
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent {
  @Input() index: number = 0;
  @Input() url: string = '';
  @Input() title: string = '';
  @Input() score: number = 0;
  @Input() author: string = '';
  @Input() time: number = 0;

  get titleWithIndex(): string {
    return `#${this.index}: ${this.title}`;
  }

  get authorLink(): string {
    return `https://news.ycombinator.com/user?id=${this.author}`;
  }
}
