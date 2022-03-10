import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { articleNotesState } from 'reducers/article-notes-reducer';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-article-notes-edit-form',
  templateUrl: './article-notes-edit-form.component.html',
  styleUrls: ['./article-notes-edit-form.component.css']
})
export class ArticleNotesEditFormComponent implements OnInit,OnDestroy {

  private storeObs:Observable<articleNotesState>;
  private subscription:Subscription;

  formGroup:FormGroup=new FormGroup({
    notesTitle:new FormControl(null,Validators.required),
    notesDescription:new FormControl(null,Validators.required)
  });
  constructor(private store:Store<articleNotesState>) { 
    this.storeObs=this.store.select(state => state);

    this.subscription=this.storeObs.subscribe((data) => {
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

  saveNote():void{
    if(!this.formGroup.valid){
      return;
    }
    console.log(this.formGroup);
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
