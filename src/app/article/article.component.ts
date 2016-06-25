import { Component, OnInit, Input } from '@angular/core';
import { Http, Request } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'app-article',
  templateUrl: 'article.component.html',
  styleUrls: ['article.component.css']
})
export class ArticleComponent implements OnInit {

  posts: any[];

  @Input()
  keyword: string;

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get('/api/articles.json')
      .map(res => res.json())
      .subscribe( (value) => {
        this.posts = value;
      });
  }

  ngOnChanges() {

    this.http.get('/api/articles.json')
      .map(res => res.json())
      .subscribe( (value) => {
        this.posts = value.filter( (value: any) => {
          return value.title.toLowerCase().indexOf(this.keyword.toLowerCase()) >= 0;
        });
      });

  }

}
