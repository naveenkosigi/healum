import { Component, Input, OnInit } from '@angular/core';
import { articleNoteModel } from 'models/article.note.model';
import { textNoteModel } from 'models/text.note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  @Input() public note:any;
  constructor() { }

  ngOnInit(): void {
  }

}
