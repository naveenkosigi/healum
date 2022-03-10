import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NotesListViewComponent } from "components/notes-list-view/notes-list-view.component";
import { NotesComponent } from "components/notes/notes.component";

@NgModule({
    declarations:[
        NotesListViewComponent,
        NotesComponent
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
        NotesComponent
    ]
})

export class sharedModule{}