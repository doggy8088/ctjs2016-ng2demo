import { Component, OnInit, OnChanges, Input, Output } from '@angular/core';
import { DataService } from '../shared/';
@Component({
  moduleId: module.id,
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css']
})
export class ArticleComponent implements OnInit, OnChanges {

  posts: any[];

  @Input()
  keyword: string;

  constructor(private ds: DataService) {}

  ngOnInit() {
    this.ds.searchArticles(this.keyword)
      .subscribe(data => this.posts = data);
  }

  ngOnChanges() {
    this.ds.searchArticles(this.keyword)
      .subscribe(data => this.posts = data);
  }

}
