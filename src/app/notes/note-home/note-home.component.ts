import { NotesService } from './../shared/notes.service';
import { Note } from './../shared/note.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note-home',
  templateUrl: './note-home.component.html',
  styleUrls: ['./note-home.component.scss'],
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
