import { QuestionBase } from "./questionbase.model";

export class textBox extends QuestionBase<String>{
    override controlType: string='textbox';
}

export class textArea extends QuestionBase<String>{
    override controlType: string='textarea';
}