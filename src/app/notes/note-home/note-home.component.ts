import { NotesService } from './../shared/notes.service';
import { Note } from './../shared/note.model';
import { Component, OnInit } from '@angular/core';
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
  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.notes = this.notesService.getAll();
  }
  deleteNote(id: number) {
    this.notesService.delete(id);
  }
}
