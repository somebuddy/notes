import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams, RouterLink } from 'angular2/router';

import { Box } from '../models/box';
import { BoxService } from '../services/box.service';

@Component({
  selector: 'box-view',
  templateUrl: './box/components/box-view.component.html',
  directives: [RouterLink]
})
export class BoxViewComponent implements OnInit {
  box: Box;

  constructor(
    private _boxService: BoxService,
    private _routeParams: RouteParams
  ) {}

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._boxService.getBox(id)
      .then(box => this.box = box);
  }

  goBack() {
    window.history.back();
  }
}
