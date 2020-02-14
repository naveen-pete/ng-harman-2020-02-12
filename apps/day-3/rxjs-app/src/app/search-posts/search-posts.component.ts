import { Component, ViewChild, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, fromEvent, Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search-posts',
  templateUrl: './search-posts.component.html',
  styleUrls: ['./search-posts.component.css']
})
export class SearchPostsComponent implements AfterViewInit, OnDestroy {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  posts: Post[] = [];

  @ViewChild('search', { static: false }) txtSearch: ElementRef;
  subscription: Subscription;

  constructor(private http: HttpClient) { }

  ngAfterViewInit() {
    this.subscription = this.initSearch().subscribe(
      posts => this.posts = posts
    );
  }

  initSearch(): Observable<Post[]> {
    return fromEvent<any>(this.txtSearch.nativeElement, 'keyup').pipe(
      map(event => event.target.value),
      debounceTime(400),
      distinctUntilChanged(),
      filter(search => search.trim().length > 0),
      switchMap(this.searchPosts)
    );
  }

  searchPosts = (searchTerm: string): Observable<Post[]> => {
    return this.http.get<Post[]>(`${this.apiUrl}?q=${searchTerm}`);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}

type Post = {
  id: number,
  title: string,
  body: string
};
