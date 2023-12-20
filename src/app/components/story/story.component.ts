import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [],
  templateUrl: './story.component.html',
  styleUrl: './story.component.css'
})
export class StoryComponent {
  @Input() link: string = '';
  @Input() title: string = '';
}
