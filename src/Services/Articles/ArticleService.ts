// article.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ArticleList {
  data: Article[]
}

export interface Article{
  id: number;
  headline: string;
  description: string;
  date: string;
}

@Injectable({
  providedIn: 'root' 
})
export class ArticleService {

  private articlesUrl = 'assets/articles.json'; 

  constructor(private http: HttpClient) { }

  getArticles(): Observable<ArticleList> {
    return this.http.get<ArticleList>(this.articlesUrl);
  }
}