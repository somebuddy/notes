import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {BoxesComponent} from './boxes.component';
import {BoxService} from './box.service';

@Component({
  selector: 'notes-app',
  template: `
    <h1>{{ title }}</h1>
    <a [routerLink]="['Notes']">Notes</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    BoxService
  ]
})
@RouteConfig([
  {
    path: '/notes',
    name: 'Notes',
    component: BoxesComponent
  }
])
export class AppComponent {
  title = "Notes-taking";
}