import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { textNoteModel } from 'models/text.note.model';
import { appState, textNotesState } from 'reducers/text-notes-reducer';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-notes-list-view',
  templateUrl: './notes-list-view.component.html',
  styleUrls: ['./notes-list-view.component.css']
})
export class NotesListViewComponent implements OnInit,OnDestroy {

  storeObservable:Observable<appState>;
  subscription:Subscription;
  notes:textNoteModel[]=[];
  constructor(private store:Store<appState>) { 
    this.storeObservable=this.store.select(state => state);

    this.subscription=this.storeObservable.subscribe(data => {
      this.notes=data.appState.textNotes;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
