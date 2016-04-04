import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {BoxService} from './box.service';
import {BoxesComponent} from './boxes.component';
import {SettingsComponent} from './settings.component';

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
    component: BoxesComponent,
    useAsDefault: true
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsComponent
  }
])
export class AppComponent {
  title = "Notes-taking";
}