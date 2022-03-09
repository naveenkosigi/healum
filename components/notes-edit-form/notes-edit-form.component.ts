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
export class NotesEditFormComponent implements OnInit,OnDestroy {

  public notesDescription:FormControl=new FormControl(null,Validators.required);
  storeObservable:Observable<textNotesState>;
  subscription:Subscription;
  
  constructor(private store:Store<textNotesState>) { 
    this.storeObservable=this.store.select(state => state);
    
    this.subscription=this.storeObservable.subscribe((data) => {
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

  saveNote():void{
    if(!this.notesDescription.valid)
      return;
    console.log(this.notesDescription);
    this.store.dispatch(notesTextActions.addTextNote({note:new textNoteModel(this.notesDescription.value,Date.now()+""
    )}));
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
