import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { textNoteModel } from 'models/text.note.model';
import { textNotesState } from 'reducers/text-notes-reducer';
import { Observable } from 'rxjs';
import * as notesTextActions from "../../actions/text-notes-action";

@Component({
  selector: 'app-notes-edit-form',
  templateUrl: './notes-edit-form.component.html',
  styleUrls: ['./notes-edit-form.component.css']
})
export class NotesEditFormComponent implements OnInit {

  notesDescription:FormControl=new FormControl();
  storeObservable:Observable<textNotesState>;
  
  constructor(private store:Store<textNotesState>) { 
    this.storeObservable=this.store.select(state => state);
    
    this.storeObservable.subscribe((data) => {
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

  saveNote():void{
    console.log(this.notesDescription);
    this.store.dispatch(notesTextActions.addTextNote({note:new textNoteModel(this.notesDescription.value,Date.now()+""
    )}));
  }

}
