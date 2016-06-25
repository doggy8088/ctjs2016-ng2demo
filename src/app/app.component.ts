import { Component } from '@angular/core';
import { HeaderComponent } from './header/';
import { ArticleComponent } from './article/';
import { SearchComponent } from './search/';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent, ArticleComponent, SearchComponent]
})
export class AppComponent {
  title = 'app works!';

  keyword: string;

  doSearch(keyword: string) {
    this.keyword = keyword;
  }

}
