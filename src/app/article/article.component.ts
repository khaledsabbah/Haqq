import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { Article, ArticleList, ArticleService } from '../../Services/Articles/ArticleService';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [SearchBarComponent, NgFor],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

  searchQuery: string = '';
  
  articles: Article[] = [];

  constructor(private articleService: ArticleService) { } 


  handleSearch(searchText: string): void {
    
    this.searchQuery = searchText;
    let self= this;
    if(this.searchQuery.length >= 1){
      this.articleService.getArticles().subscribe(
        function(articles: ArticleList) {
          self.articles = articles.data;
        },
        (error) => {
          this.articles = [];
        }
      );
    }else{
      this.articles=[]
    }
    
  }
  
}
