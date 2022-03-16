import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { textNoteModel } from 'models/text.note.model';
import { appState} from 'reducers/text-notes-reducer';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-notes-list-view',
  templateUrl: './notes-list-view.component.html',
  styleUrls: ['./notes-list-view.component.css']
})
export class NotesListViewComponent implements OnInit,OnDestroy {

  @Input() lookUpKeyInState:String
  storeObservable:Observable<any>;
  subscription:Subscription;
  notes:textNoteModel[]=[];
  constructor(private store:Store<appState>) {
    this.storeObservable=this.store.select(state => this.jsonStringPath(state,this.lookUpKeyInState));
  }

  ngOnInit(): void {

    this.subscription=this.storeObservable.subscribe(data => {
      this.notes=data;
    });

  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  //below is a helper method that helps us to get a path from the state a.b.c => a[b][c]
  // will make it reusable accross different modules
  
  private jsonStringPath(object : any, path : String) : []{      
    return path.split('.').reduce ( (res, prop) => res[prop], object );
  }


}
