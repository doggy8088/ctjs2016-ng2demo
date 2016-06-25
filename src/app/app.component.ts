import { Component } from '@angular/core';
import { HeaderComponent } from './header/';
import { ArticleComponent } from './article/';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent, ArticleComponent]
})
export class AppComponent {
  title = 'app works!';
}
