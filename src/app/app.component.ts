import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ApiService } from './shared';

import '../style/app.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app',
  providers: [ApiService],
  directives: [...ROUTER_DIRECTIVES],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/publicJorn/angular2-webpack';

  constructor (private api: ApiService) {
  }
}
