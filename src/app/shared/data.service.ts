import { Injectable } from '@angular/core';
import { Http, Request } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  url = '/api/articles.json';

  constructor(private http: Http) {}

  searchArticles(keyword: string) {
    return this.http.get(this.url)
      .map(res => {
        return res.json().filter(value => {
          if(keyword) {
            return value.title.toLowerCase().indexOf(keyword.toLowerCase()) >= 0;
          }
          else {
            return true;
          }
        });
      });
  }
}
