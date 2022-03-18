import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { articleNoteModel } from 'models/article.note.model';
import { QuestionBase } from 'models/questionbase.model';
import { textArea, textBox } from 'models/textbox.form.string';
import { articleNotesState } from 'reducers/article-notes-reducer';
import { Subscription } from 'rxjs';
import { dynamicFormsService } from 'services/dynamicforms.service';
import * as notesArticleActions from "../../actions/article-notes-action";

@Component({
  selector: 'app-article-notes-edit-form',
  templateUrl: './article-notes-edit-form.component.html',
  styleUrls: ['./article-notes-edit-form.component.css']
})
export class ArticleNotesEditFormComponent implements OnInit{

  subscription:Subscription;
  questions : QuestionBase<String>[]=[
    new textBox({
      key:"notesTitle",
      label:'Title',
      required:true
    }),
    new textArea({
      key:"notesDescription",
      label:'Note Description',
      required:true,
      validators:[function testValidator(){
        console.log("testValidators");
        return Promise.resolve(null);
      }]
    })
  ];

  formGroup:FormGroup=new FormGroup({
    notesTitle:new FormControl(null,Validators.required),
    notesDescription:new FormControl(null,Validators.required)
  });
  constructor(private store:Store<articleNotesState>,private questionsService:dynamicFormsService) { 
    this.subscription=this.questionsService.dispatchSaveAction.subscribe((data) => {
      this.store.dispatch(notesArticleActions.addArticleNote(
        {note:new articleNoteModel(data.notesTitle,data.notesDescription)}
      ));
    });
  }

  ngOnInit(): void {
  }

  saveNote():void{
    if(!this.formGroup.valid)
      return;
    this.store.dispatch(notesArticleActions.addArticleNote(
      {note:new articleNoteModel(this.formGroup.controls['notesTitle'].value,this.formGroup.controls['notesDescription'].value)}
    ));
    this.formGroup.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
