import {Component} from 'angular2/core';
import {Box} from './note';
import {NoteDetailComponent} from './note-details';

@Component({
    selector: 'notes-app',
    template: `
      <h1>{{ title }}</h1>
      <h2>My Notes</h2>
      <ul class="notes">
        <li *ngFor="#note of notes"
          [class.selected]="note === selectedNote"
          (click)="onSelect(note)">
          <span class="badge">{{note.id}}</span> {{note.title}}
        </li>
      </ul>
      <note-detail [note]="selectedNote"></note-detail>
    `,
    directives: [NoteDetailComponent]
})
export class AppComponent {
  title = "Notes-taking";
  public notes = NOTES;
  selectedNote: Box;
  onSelect(note: Box) {
    this.selectedNote = note;
  };
}

var NOTES: Box[] = [
  { "id": 1, "title": "Sample"},
  { "id": 2, "title": "Sample 2"},
  { "id": 3, "title": "Sample 3"},
  { "id": 4, "title": "Sample 4"},
  { "id": 5, "title": "Sample 5"},
]
