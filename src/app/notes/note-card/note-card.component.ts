import { NotesService } from './../shared/notes.service';
import { Component, OnInit, ElementRef, ViewChild, Renderer2, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;
  @Input() link: string;
  @Output() delete: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('truncator') truncator: ElementRef<HTMLElement>;
  @ViewChild('bodyText') bodyText: ElementRef<HTMLElement>;
  constructor(private renderer: Renderer2, private notesService: NotesService) {}

  ngOnInit() {
    if (this.bodyText) {
      const style = window.getComputedStyle(this.bodyText.nativeElement, null);
      const viewableHeight = parseInt(style.getPropertyValue('height'), 10);
      if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
        this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
      } else {
        this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
      }
    }
  }
  onXButtonClick() {
    this.delete.emit();
    // this.notesService.delete(parseInt(this.link));
  }
}
