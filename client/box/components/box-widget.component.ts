import { Component, Input } from 'angular2/core';
import { Router, RouterLink } from 'angular2/router';

import { Box } from '../models/box';
import { BoxService } from '../services/box.service';

@Component({
  selector: 'box-widget',
  templateUrl: './box/components/box-widget.component.html',
  directives: [RouterLink]
})
export class BoxWidgetComponent {
  @Input() box: Box;

  constructor(
    private _router: Router,
    private _boxService: BoxService
  ) { }

  gotoDetail() {
    let link = ['BoxDetail', { id: this.box.id }];
    this._router.navigate(link);
  }

  deleteBox() { this._boxService.deleteBox(this.box.id); }
  restoreBox() { this._boxService.restoreBox(this.box.id); }
}