import { Component, Input } from 'angular2/core';
import { Router } from 'angular2/router';

import { Box } from '../models/box';
import { BoxService } from '../services/box.service';

@Component({
  selector: 'box-widget',
  templateUrl: './box/components/box-widget.component.html'
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
  
  deleteBox() {
    this._boxService.deleteBox(this.box.id);
  }
}