import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { QuestionBase } from "models/questionbase.model";
import { Subject } from "rxjs";

@Injectable()
export class dynamicFormsService{

    dispatchSaveAction:Subject<any>=new Subject<any>();
    
    constructor(){
        
    }

    toFormGroup(questions:QuestionBase<String>[]){
        let group:any={};

        questions.forEach((question) => {
            group[question.key]=question.required ? new FormControl(question.value || "",Validators.required,question.validators) : new FormControl(question.value,null,question.validators);
        });

        return new FormGroup(group);
    }
}