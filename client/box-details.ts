import {Component, Input} from 'angular2/core';
import {Box} from './box';

@Component({
  selector: 'box-detail',
  template: `
    <div *ngIf="box">
      <h2>{{ box.title }} details!</h2>
      <div><label>id: </label>{{ box.id }}</div>
      <div>
        <label>name: </label>
        <textarea [(ngModel)]="box.title"></textarea>
      </div>
    </div>
  `
})
export class BoxDetailComponent {
  @Input()
  box: Box;
}
