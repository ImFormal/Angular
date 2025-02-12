import { Component } from '@angular/core';
import { Article } from '../models/article.interface';
import { ArticleElementComponent } from '../article-element/article-element.component';
import { AddArticleComponent } from '../add-article/add-article.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-blog-central-center',
  imports: [NgFor, AddArticleComponent, ArticleElementComponent],
  templateUrl: './blog-central-center.component.html',
  styleUrls: ['./blog-central-center.component.css']
})
export class BlogCentralCenterComponent {
  articles: Article[] = [
    {
      id: 1,
      title: 'Mon premier article',
      content: 'Ceci est le contenu de mon premier article.',
      author: 'Auteur 1',
      date: new Date('2023-01-01'),
      type: 'article'
    },
    {
      id: 2,
      title: 'Mon deuxième article',
      content: 'Ceci est le contenu de mon deuxième article.',
      author: 'Auteur 2',
      date: new Date('2023-02-01'),
      type: 'brouillon'
    }
  ];

  onArticleAdded(articleData: { title: string; content: string; author: string; date: Date; type: string }) {
    const newArticle: Article = {
      id: this.articles.length + 1,
      title: articleData.title,
      content: articleData.content,
      author: articleData.author,
      date: articleData.date,
      type: articleData.type
    };
    
    this.articles.push(newArticle);
  }
}