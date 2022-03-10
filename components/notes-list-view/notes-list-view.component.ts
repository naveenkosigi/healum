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
  storeObservable:Observable<appState>;
  subscription:Subscription;
  notes:textNoteModel[]=[];
  constructor(private store:Store<appState>) {
    console.log(store);
    console.log(this.lookUpKeyInState); 
    this.storeObservable=this.store.select(state => state);

    
  }

  ngOnInit(): void {

    this.subscription=this.storeObservable.subscribe(data => {
      console.log(this.jsonStringPath(data,this.lookUpKeyInState));
      this.notes=this.jsonStringPath(data,this.lookUpKeyInState);
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
