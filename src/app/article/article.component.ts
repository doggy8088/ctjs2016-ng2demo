import { Component, OnInit, OnChanges, Input, Output } from '@angular/core';
import { Http, Request } from '@angular/http';
import 'rxjs/add/operator/map';

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

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get('/api/articles.json')
      .map(res => res.json())
      .subscribe( (data) => {

        this.posts = data;

      });
  }

  ngOnChanges() {
    console.log('1');
    this.http.get('/api/articles.json')
      .map(res => res.json())
      .subscribe( (data) => {

        if(!this.keyword) {
          this.posts = data;
        } else {
          this.posts = data.filter((value) => {
            console.log(value);
            console.log(this.keyword);
            return value.title.toLowerCase().indexOf(this.keyword.toLowerCase()) > -1;
          });
        }

      });
  }

}
