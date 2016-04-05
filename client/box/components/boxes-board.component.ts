import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Box } from '../models/box';
import { BoxService } from '../services/box.service';
import { BoxWidgetComponent } from '../components/box-widget.component';

@Component({
    selector: 'boxes',
    templateUrl: './box/components/boxes-board.component.html',
    directives: [BoxWidgetComponent]
})
export class BoxesBoardComponent implements OnInit {
  boxes: Box[];
  newBox: Box;

  constructor(
    private _router: Router,
    private _boxService: BoxService
  ) { }

  getBoxes() {
    this._boxService.getBoxes().then(boxes => this.boxes = boxes);
  }

  _initNewBox() {
    this.newBox = new Box;
    this.newBox.states = {};
  }

  addBox() {
    this._boxService.addBox(this.newBox);
    this._initNewBox();
  }

  ngOnInit() {
    this._initNewBox();
    this.getBoxes();
  }
}
