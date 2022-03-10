import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-picture-notes-edit-form',
  templateUrl: './picture-notes-edit-form.component.html',
  styleUrls: ['./picture-notes-edit-form.component.css']
})
export class PictureNotesEditFormComponent implements OnInit {
  
  formGroup:FormGroup=new FormGroup({
    notesTitle:new FormControl(null,Validators.required),
    notesDescription:new FormControl(null,Validators.required),
    imageUrl:new FormControl(null,Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

  saveNote():void{
    console.log(this.formGroup);
  }



}
