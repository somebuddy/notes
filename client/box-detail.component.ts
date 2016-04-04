import {Component, Input, OnInit} from 'angular2/core';
import { RouteParams } from 'angular2/router';

import {Box} from './box';
import { BoxService } from './box.service';

@Component({
  selector: 'box-detail',
  templateUrl: 'box-detail.component.html'
})
export class BoxDetailComponent implements OnInit {
  @Input() box: Box;
  
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
