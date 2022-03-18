import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from 'models/questionbase.model';
import { dynamicFormsService } from 'services/dynamicforms.service';

@Component({
  selector: 'app-dynamic-form-constructor',
  templateUrl: './dynamic-form-constructor.component.html',
  styleUrls: ['./dynamic-form-constructor.component.css']
})
export class DynamicFormConstructorComponent implements OnInit {

  @Input() questions:QuestionBase<String>[] = [];
  form:FormGroup;

  constructor(private questionService: dynamicFormsService) { }

  ngOnInit(): void {
    this.form=this.questionService.toFormGroup(this.questions);
    console.log(this.form);
  }

  onSave(){
    if(this.form.valid){
      this.questionService.dispatchSaveAction.next(this.form.getRawValue());
      this.form.reset();
    }
  }

}
