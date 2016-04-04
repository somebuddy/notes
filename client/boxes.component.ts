import {Component} from 'angular2/core';
import {Box} from './box';
import {BoxDetailComponent} from './box-details';
import {BoxService} from './box.service';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'boxes',
    template: `
      <h1>{{ title }}</h1>
      <h2>My Notes</h2>
      <ul class="boxes">
        <li *ngFor="#box of boxes"
          [class.selected]="box === selectedBox"
          (click)="onSelect(box)">
          <span class="badge">{{box.id}}</span> {{box.title}}
        </li>
      </ul>
      <box-detail [box]="selectedBox"></box-detail>
    `,
    directives: [BoxDetailComponent]
})
export class BoxesComponent implements OnInit {
  boxes: Box[];
  selectedBox: Box;
  
  constructor(private _boxService: BoxService) { }
  
  getBoxes() {
    this._boxService.getBoxes().then(boxes => this.boxes = boxes);
  }
  
  onSelect(box: Box) {
    this.selectedBox = box;
  }

  ngOnInit() {
    this.getBoxes();
  }
}