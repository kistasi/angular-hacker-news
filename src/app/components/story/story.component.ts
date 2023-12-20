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
  @Input() url: string = '';
  @Input() title: string = '';
  @Input() score: number = 0;
  @Input() author: string = '';
  @Input() time: number = 0;

  get authorLink(): string {
    return `https://news.ycombinator.com/user?id=${this.author}`;
  }
}
