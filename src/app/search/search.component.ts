import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent implements OnInit {

  keyword: string;

  @Output()
  onsearch = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
  }

  search($event) {
    this.onsearch.emit(this.keyword);
  }

}
