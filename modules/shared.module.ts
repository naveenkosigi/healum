import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DynamicFormConstructorComponent } from "components/dynamic-form-constructor/dynamic-form-constructor.component";
import { DynamicFormComponent } from "components/dynamic-form/dynamic-form.component";
import { NotesListViewComponent } from "components/notes-list-view/notes-list-view.component";
import { NotesComponent } from "components/notes/notes.component";

@NgModule({
    declarations:[
        NotesListViewComponent,
        NotesComponent,
        DynamicFormComponent,
        DynamicFormConstructorComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports:[
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        NotesListViewComponent,
        NotesComponent,
        DynamicFormComponent,
        DynamicFormConstructorComponent
    ]
})

export class sharedModule{}