import { NotesService } from './../shared/notes.service';
import { Note } from './../shared/note.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-note-home',
  templateUrl: './note-home.component.html',
  styleUrls: ['./note-home.component.scss'],
  animations: [
    trigger('itemAnim', [
      transition('void => *', [
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0
        }),
        animate(
          '50ms',
          style({
            height: '*',
            'margin-bottom': '*',
            paddingTop: '*',
            paddingBottom: '*',
            paddingRight: '*',
            paddingLeft: '*'
          })
        ),
        animate(68)
      ]),
      transition('* => void', [
        animate(50, style({ transform: 'scale(1.05)' })),
        animate(
          50,
          style({
            transform: 'scale(1)',
            opacity: 0.75
          })
        ),
        animate(
          '120ms ease-out',
          style({
            transform: 'scale(0.68)',
            opacity: 0
          })
        ),
        animate(
          '150ms ease-out',
          style({
            opacity: 0,
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            paddingRight: 0,
            paddingLeft: 0,
            'margin-bottom': 0
          })
        )
      ])
    ]),
    trigger('listAnim', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({
              opacity: 0,
              height: 0
            }),
            stagger(100, [animate('0.2s ease')])
          ],
          {
            optional: true
          }
        )
      ])
    ])
  ]
})
export class NoteHomeComponent implements OnInit {
  notes: Note[] = new Array<Note>();
  filteredNotes: Note[] = new Array<Note>();
  @ViewChild('filterInput') filterInputElRef: ElementRef<HTMLInputElement>;
  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notes = this.notesService.getAll();
    this.filter('');
  }
  deleteNote(note: Note): void {
    this.notesService.delete(this.notesService.getId(note));
    this.filter(this.filterInputElRef.nativeElement.value);
  }
  generateNoteURL(note: Note): number {
    return this.notesService.getId(note);
  }
  // tslint:disable-next-line:no-shadowed-variable
  filter(query: string): void {
    query = query.toLowerCase().trim();
    let allResults: Note[] = new Array<Note>();
    let terms: string[] = query.split(' ');
    terms = this.removeDuplicates(terms);
    terms.forEach(term => {
      let results: Note[] = this.relevantNotes(term);
      allResults = [...allResults, ...results];
    });
    let uniqueResults = this.removeDuplicates(allResults);
    this.filteredNotes = uniqueResults;
    this.sortByRelevancy(uniqueResults);
  }
  removeDuplicates(arr: Array<any>): Array<any> {
    let uniqueResults: Set<string> = new Set<string>();
    arr.forEach(e => uniqueResults.add(e));
    return Array.from(uniqueResults);
  }
  // tslint:disable-next-line:no-shadowed-variable
  relevantNotes(query: string): Array<Note> {
    query = query.toLowerCase().trim();
    let relevantNotes = this.notes.filter(
      note =>
        note.body.toLowerCase().includes(query) ||
        note.title.toLowerCase().includes(query)
    );
    return relevantNotes;
  }
  sortByRelevancy(searchResults: Note[]) {
    let noteCountObj: object = {};
    searchResults.forEach(note => {
      let noteID = this.notesService.getId(note);
      if (noteCountObj[noteID]) {
        noteCountObj[noteID] += 1;
      } else {
        noteCountObj[noteID] = 1;
      }
    });
    this.filteredNotes = this.filteredNotes.sort((a: Note, b: Note) => {
      let aID = this.notesService.getId(a);
      let bID = this.notesService.getId(b);
      let aCount = noteCountObj[aID];
      let bCount = noteCountObj[bID];
      return bCount - aCount;
    });
  }
}
