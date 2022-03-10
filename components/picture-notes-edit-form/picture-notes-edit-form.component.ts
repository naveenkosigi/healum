import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { pictureNotesModel } from 'models/picture.note.model';
import { appState } from 'reducers/text-notes-reducer';
import { Observable, Subscription } from 'rxjs';
import * as pictureNotesActions from "../../actions/picture-notes-action"; 

@Component({
  selector: 'app-picture-notes-edit-form',
  templateUrl: './picture-notes-edit-form.component.html',
  styleUrls: ['./picture-notes-edit-form.component.css']
})
export class PictureNotesEditFormComponent implements OnInit,OnDestroy {
  

  storeObs:Observable<appState>;
  subscription:Subscription;

  formGroup:FormGroup=new FormGroup({
    notesTitle:new FormControl(null,Validators.required),
    notesDescription:new FormControl(null,Validators.required),
    imageUrl:new FormControl(null,Validators.required)
  });

  constructor(private store:Store<appState>) { 
    this.storeObs=this.store.select(state => state);

    this.subscription=this.storeObs.subscribe(data => console.log(data));
  }

  ngOnInit(): void {
  }

  saveNote():void{
    if(!this.formGroup.valid)
      return;
    console.log(this.formGroup);
    this.store.dispatch(pictureNotesActions.addPictureNote({note:new pictureNotesModel(
      this.formGroup.value.notesTitle,this.formGroup.value.notesDescription,this.formGroup.value.imageUrl
    )}));
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
