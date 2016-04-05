import { Component, Input } from 'angular2/core';
import { Router } from 'angular2/router';

import { Box } from '../models/box';

@Component({
  selector: 'box-widget',
  template: `
    <li class="box-widget" [class.deleted]="box.states.deleted">
      <span class="title">{{ box.title }}</span>
      <button class="delete-button">Delete</button>
      <button class="details-button" (click)="gotoDetail()">View details</button>
    </li>
  `
})
export class BoxWidgetComponent {
  @Input() box: Box;
  
  constructor(
    private _router: Router
  ) { }

  gotoDetail() {
    let link = ['BoxDetail', { id: this.box.id }];
    this._router.navigate(link);
  }
}