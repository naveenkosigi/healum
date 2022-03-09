import { Component, Input, OnInit } from '@angular/core';
import { textNoteModel } from 'models/text.note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() note:textNoteModel;
  constructor() { }

  ngOnInit(): void {
  }

}
