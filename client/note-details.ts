import {Component, Input} from 'angular2/core';
import {Box} from './note';

@Component({
  selector: 'note-detail',
  template: `
    <div *ngIf="note">
      <h2>{{ note.title }} details!</h2>
      <div><label>id: </label>{{ note.id }}</div>
      <div>
        <label>name: </label>
        <textarea [(ngModel)]="note.title"></textarea>
      </div>
    </div>
  `,
  directives: [NoteDetailComponent]
})
export class NoteDetailComponent {
  @Input()
  note: Box;
}
