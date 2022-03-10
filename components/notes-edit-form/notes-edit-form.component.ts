import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { textNoteModel } from 'models/text.note.model';
import { textNotesState } from 'reducers/text-notes-reducer';
import { Observable, Subscription } from 'rxjs';
import * as notesTextActions from "../../actions/text-notes-action";

@Component({
  selector: 'app-notes-edit-form',
  templateUrl: './notes-edit-form.component.html',
  styleUrls: ['./notes-edit-form.component.css']
})
export class NotesEditFormComponent implements OnInit{

  public notesDescription:FormControl=new FormControl(null,Validators.required);

  
  constructor(private store:Store<textNotesState>) { 
  }

  ngOnInit(): void {
  }

  saveNote():void{
    if(!this.notesDescription.valid)
      return;
    this.store.dispatch(notesTextActions.addTextNote({note:new textNoteModel(this.notesDescription.value)}));
    this.notesDescription.reset();
  }
}
