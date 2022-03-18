import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QuestionBase } from 'models/questionbase.model';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() question:QuestionBase<String>;
  @Input() form:FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  get isValid():boolean{
    if(this.form.controls[this.question.key].invalid && this.form.controls[this.question.key].touched){
      return false;
    }
    return true;
  }

}
