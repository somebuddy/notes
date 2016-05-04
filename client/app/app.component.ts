import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { ToggleClassDirective, CollapseButtonDirective } from '../core/core';
import { BoxService, BoxesBoardComponent, BoxViewComponent } from '../box/core';

import { SettingsComponent } from './settings.component';

@Component({
  selector: 'notes-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES, CollapseButtonDirective],
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
