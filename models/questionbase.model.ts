import { ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

export class QuestionBase<T> {
    value: T|undefined;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    options: {key: string, value: string}[];
    validators:(() => Promise<ValidationErrors | null> | Observable<ValidationErrors | null>)[]
  
    constructor(options: {
        value?: T,
        key?: string,
        label?: string,
        required?: boolean,
        order?: number,
        controlType?: string,
        type?: string,
        options?: {key: string, value: string}[],
        validators?:(() => Promise<ValidationErrors | null> | Observable<ValidationErrors | null>)[]
      } = {}) {
      this.value = options.value;
      this.key = options.key || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.controlType = options.controlType || '';
      this.type = options.type || '';
      this.options = options.options || [];
      this.validators=options.validators || [];
    }
  }