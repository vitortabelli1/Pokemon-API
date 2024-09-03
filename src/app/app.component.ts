import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ButtonComponent, SearchComponent]
})
export class AppComponent implements OnInit {
  title = 'Pokemon-API';

  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
