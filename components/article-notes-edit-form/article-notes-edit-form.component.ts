import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-notes-edit-form',
  templateUrl: './article-notes-edit-form.component.html',
  styleUrls: ['./article-notes-edit-form.component.css']
})
export class ArticleNotesEditFormComponent implements OnInit {

  notesDescription:FormControl=new FormControl(null,Validators.required)
  constructor() { }

  ngOnInit(): void {
  }

  saveNote():void{
    
  }

}
