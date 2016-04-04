import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import {Box} from './box';
import {BoxDetailComponent} from './box-detail.component';
import {BoxService} from './box.service';


@Component({
    selector: 'boxes',
    templateUrl: 'boxes.component.html',
    directives: [BoxDetailComponent]
})
export class BoxesComponent implements OnInit {
  boxes: Box[];
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

  ngOnInit() {
    this.getBoxes();
  }
}