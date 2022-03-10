import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { articleNoteModel } from 'models/article.note.model';
import { articleNotesState } from 'reducers/article-notes-reducer';
import { Observable, Subscription } from 'rxjs';
import * as notesArticleActions from "../../actions/article-notes-action";

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
    if(!this.formGroup.valid)
      return;
    console.log(this.formGroup);
    this.store.dispatch(notesArticleActions.addArticleNote(
      {note:new articleNoteModel(this.formGroup.controls['notesTitle'].value,this.formGroup.controls['notesDescription'].value)}
    ));
    this.formGroup.reset();
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
