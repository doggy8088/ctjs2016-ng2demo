import { Component, OnInit } from '@angular/core';
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

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get('/api/articles.json')
      .map(res => res.json())
      .subscribe( (data) => {

        this.posts = data;

      });
  }

}
