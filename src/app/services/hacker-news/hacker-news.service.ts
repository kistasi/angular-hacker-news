import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Story } from '../../interfaces/story';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {

  static readonly BASE_URL = 'https://hacker-news.firebaseio.com/v0';

  constructor(private http: HttpClient) { }

  getTopStories(): any {
    return this.http.get(`${HackerNewsService.BASE_URL}/topstories.json`);
  }

  getStory(id: number): Observable<Story> {
    return this.http.get<Story>(`${HackerNewsService.BASE_URL}/item/${id}.json`);
  }
}
