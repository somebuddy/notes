import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Box } from '../models/box';
import { BoxService } from '../services/box.service';
import { BoxDetailComponent } from '../components/box-detail.component';
import { BoxWidgetComponent } from '../components/box-widget.component';

@Component({
    selector: 'boxes',
    templateUrl: './box/components/boxes-board.component.html',
    directives: [BoxDetailComponent, BoxWidgetComponent]
})
export class BoxesComponent implements OnInit {
  boxes: Box[];
  newBox: Box;
  selectedBox: Box;

  constructor(
    private _router: Router,
    private _boxService: BoxService
  ) { }

  getBoxes() {
    this._boxService.getBoxes().then(boxes => this.boxes = boxes);
  }

  onSelect(box: Box) {
    this.selectedBox = box;
  }

  gotoDetail(box: Box) {
    let link = ['BoxDetail', { id: box.id }];
    this._router.navigate(link);
  }

  addBox() {
    this._boxService.addBox(this.newBox);
    this.newBox = new Box;
    this.newBox.states = {};
  }

  ngOnInit() {
    this.newBox = new Box;
    this.newBox.states = {};
    this.getBoxes();
  }
}
