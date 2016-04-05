import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { BoxService, BoxesBoardComponent, BoxViewComponent } from '../box/core';

import { SettingsComponent } from './settings.component';

@Component({
  selector: 'notes-app',
  template: `
    <h1>{{ title }}</h1>
    <nav>
      <a [routerLink]="['Notes']">Notes</a>
      <a [routerLink]="['Settings']">Settings</a>
    </nav>
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
    component: BoxesBoardComponent,
    useAsDefault: true
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsComponent
  },
  {
    path: '/box/:id',
    name: 'BoxDetail',
    component: BoxViewComponent
  }
])
export class AppComponent {
  title = "Notes-taking";
}
