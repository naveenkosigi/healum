import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-notes-edit-form',
  templateUrl: './article-notes-edit-form.component.html',
  styleUrls: ['./article-notes-edit-form.component.css']
})
export class ArticleNotesEditFormComponent implements OnInit {


  formGroup:FormGroup=new FormGroup({
    notesTitle:new FormControl(null,Validators.required),
    notesDescription:new FormControl(null,Validators.required)
  });
  constructor() { }

  ngOnInit(): void {
  }

  saveNote():void{
    if(!this.formGroup.valid){
      return;
    }
    console.log(this.formGroup);
  }

}
