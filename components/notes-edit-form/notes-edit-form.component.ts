import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notes-edit-form',
  templateUrl: './notes-edit-form.component.html',
  styleUrls: ['./notes-edit-form.component.css']
})
export class NotesEditFormComponent implements OnInit {

  notesDescription:FormControl=new FormControl();
  
  constructor() { }

  ngOnInit(): void {
  }

  saveNote():void{
    console.log(this.notesDescription);

  }

}
